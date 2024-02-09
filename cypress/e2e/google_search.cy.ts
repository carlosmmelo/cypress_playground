import Google_homepage from './pages/google_homepage';

describe('My first test', () => {
  it('Visit Google Search website', () => {

    Google_homepage
        .visit()
        .searchByText('testing cypress')

    // Verify non Ads results are found and displayed.
    cy.get('.MjjYud').should("have.length.greaterThan", 0)
  })
})