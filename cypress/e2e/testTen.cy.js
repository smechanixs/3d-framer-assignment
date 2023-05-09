import globalElements from '../pages/globalElements'
import homePage from '../pages/homePage'

describe('Check if "Get the app" button in the "Text styles, variants and overlays" section opens up the sign-up modal', () => {
    it('goes to the section and clicks on the "get the app" button', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(homePage.elements.tSVOSection())
            .scrollIntoView()
            .get(homePage.elements.getTheAppButtonTSVOSection())
            .click()
        cy.get(homePage.elements.signupModal())
            .should('have.css', 'opacity', 1)

    })
})