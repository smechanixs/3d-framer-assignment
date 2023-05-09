import globalElements from '../pages/globalElements'
import homePage from '../pages/homePage'

describe('9.Check if the sign-up modal disappear on click on the background after opened from "Get the app" button', () => {
    it('clicks on the "Get the app" button and clicks again outside the modal', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(homePage.elements.getTheAppButton())
            .click()
        //check if the sign-up modal is displayed on the screen
        cy.get(homePage.elements.signupModal()).should('have.css', 'opacity', '1')
        cy.get(globalElements.pageOverlay)
            .click({force: true})
        cy.get(homePage.elements.signupModal()).should('have.css', 'opacity', '0')
    })
})