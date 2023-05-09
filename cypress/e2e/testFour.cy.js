import globalElements from '../pages/globalElements'

describe('4. Check if sign-up button color in "Subscribe section" is rgb(255, 82, 79)', () => {
    it('Scrolls down to the components page and checks the sign-up button color', () => {
        cy.visit(globalElements.homePageUrl)
        globalElements.footerElements.subscribeSection().scrollIntoView()
            .find(globalElements.footerElements.signupButton())
            .should('have.css', 'background-color', signupColorRGB)
    })
})

let signupColorRGB = 'rgb(255, 82, 79)'