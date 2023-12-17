/// <reference types="cypress" />

import base from "../page_object_model/base";
import search from "../page_object_model/search";
import result from "../page_object_model/result";
import { phraseSearch, noResults } from "../fixtures/searchText.json";

describe("Typing text into a search box", () => {
    it("Typing", () => {
        base.openHome();
        search.phraseTyping(phraseSearch);
        search.searchBox.should("have.value", phraseSearch)
        cy.wait(3000)
        search.clearTyping();
        cy.wait(3000)
        search.phraseTyping(`${phraseSearch} {enter}`)
        result.searchResult.should("be.visible").and("include.text", "Nothing")
    })
})