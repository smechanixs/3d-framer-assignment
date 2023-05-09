import globalElements from '../pages/globalElements'
import homePage from '../pages/homePage'

describe('8. Check if 3d animation is displayed on "click to view in 3d" click', () => {
    it('clicks on the "click to view in 3d" button and checks if animation is played', () => {
        cy.visit(globalElements.homePageUrl)
            .viewport(globalElements.fullHDRW, globalElements.fullHDRH)
        cy.get(homePage.elements.viewIn3dBtn())
            .click()
        //check if the iframe with 3d is loaded
        cy.get('iframe')
    })
})