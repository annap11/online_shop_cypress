class result {
    get searchResult() {
    return cy.get("h1.page-title")
    }
}

export default new result();