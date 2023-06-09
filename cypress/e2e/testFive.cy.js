import globalElements from '../pages/globalElements'
import homePage from '../pages/homePage'

describe('5. Check if the background blurs on "Get the app" button click', () => {
    it('Click on "Get the app" button and check if the modal has blur', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(homePage.elements.getTheAppButton())
            .first()
            .click()
        cy.get(globalElements.pageOverlay)
            .should('have.css', 'backdrop-filter')
    })
})
