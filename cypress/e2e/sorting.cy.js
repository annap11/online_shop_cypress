/// <reference types="cypress" />

import base from "../page_object_model/base";
import home from "../page_object_model/home";

describe("Products sorting", () => {
    it("Click on MOST WANTED section", () => {
        base.openHome();
        home.MostWantedSection.click();
        cy.url().should("include", "most-wanted")
    })

    it("Select sort by popularity", () => {
        cy.get(".orderby").select("Sort by popularity")
        cy.url().should("include", "popularity")
    })
    it("Select sort by price ascending", () => {
        cy.get(".orderby").select("Sort by price: low to high")
        cy.url().should("include", "price")
    })
    it("Select sort by price descending", () => {
        cy.get(".orderby").select("Sort by price: high to low")
        cy.url().should("include", "price")
    })
})