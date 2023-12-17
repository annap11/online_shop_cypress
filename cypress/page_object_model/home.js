class home {
    get ContactSection() {
        return cy.get(`a[title="Contact"]`)
    }
    clickOnContactSection() {
        this.ContactSection.click();
    }
    get MostWantedSection() {
        return cy.get(`a[title="Most Wanted"`)
    }
    clickOnMostWantedSection() {
        this.MostWantedSection.click();
    }
}

export default new home();