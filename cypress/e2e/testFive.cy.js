import globalElements from '../pages/globalElements'
import componentsPage from '../pages/componentsPage'

describe('5. Check if the background blurs on "Get the app" button click', () => {
    it('Click on "Get the app" button and check if the modal has blur', () => {
        cy.visit(globalElements.homePageUrl)
        componentsPage.elements.getTheAppButton()
            .click()
        componentsPage.elements.signupModal()
            .should('have.css', 'backdrop-filter', 'blur(30px)')
    })
})
