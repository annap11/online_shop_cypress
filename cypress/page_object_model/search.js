// import { phraseSearch } from "../fixtures/searchText.json";

class search {
    get searchBox() {
        return cy.get("#search-field-top-bar")
    }

    phraseTyping(searchValue) {
        this.searchBox.type(searchValue)
        // this.searchBox.type(phraseSearch)
    }

    clearTyping() {
        this.searchBox.clear();
    }
}

export default new search();