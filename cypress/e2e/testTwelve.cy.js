import globalElements from '../pages/globalElements'
import signupPage from '../pages/signupPage'

describe('12. Check if the password field have the proper input type', () => {
  it('clicks on "sign up" button in the header and checks the type of the password field', () => {
    cy.visit(globalElements.homePageUrl)
    cy.get(globalElements.headerElements.signupButtonHeader())
        .first()
        .click()
    cy.get(signupPage.elements.passwordInput())
        .should('have.attr', 'type', 'password')
  })
})