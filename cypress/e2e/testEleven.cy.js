import globalElements from '../pages/globalElements'
import signupPage from '../pages/signupPage'

describe('11. Check if the email field have the proper input type', () => {
    it('clicks on "sign up" button in the header and inputs invalid data for email and click submit', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(globalElements.headerElements.signupButtonHeader())
            .click()
        cy.get(signupPage.elements.emailInput())
            .type('dasd123')
        cy.get(signupPage.elements.submitButton())
            .click()
        cy.get(signupPage.elements.emailInput())
            .should('have.attr', 'type', 'email')
    })
})