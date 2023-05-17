import globalElements from '../pages/globalElements'
import homePage from '../pages/homePage'
//Not sure if there is another way to test this case without external plugins
describe('7. Check if "get the app" and "watch video" buttons are displayed one above another', () => {
    it('switches the resolution to iphone-x and checks the order of the buttons', () => {
        cy.visit(globalElements.homePageUrl)
        cy.viewport('iphone-x')
        cy.get(homePage.elements.btnSection())
            .children().each(($btn, index) => {
                if (index === 0){
                    cy.wrap($btn)
                        .should('contain.text', homePage.elements.getTheAppButtonText())
                }
                else if (index === 1){
                    cy.wrap($btn)
                        .should('contain.text', homePage.elements.watchVideoText())
                }
        })
    })
})