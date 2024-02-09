/// <reference types="cypress" />

class Google_homepage {
    elements = {
        searchFieldInput: () => cy.get('#APjFqb')
    }

    searchByText (text) {
        this.elements.searchFieldInput().type(`${text}{enter}`)
        return this // return page object to start chainable commands
    }

    visit () {
        cy.visit('https://www.google.com')
        this.elements.searchFieldInput().should('be.visible')
        return this // return page object to start chainable commands
    }
}

export default new Google_homepage()
