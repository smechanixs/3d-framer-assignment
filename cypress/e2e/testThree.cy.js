import globalElements from '../pages/globalElements'
import homePage from "../pages/homePage"

describe('3. "Visit" button is displayed in all cards in "Many types of components to customize section"', () => {
    it('Navigates to "Many types of components to customize section" and checks for "Visit" button in all cards in the section', () => {
        cy.visit(globalElements.homePageUrl)
        //Checks for the visit button in the normal card elements
        cy.get(homePage.elements.componentsCardsSection()).scrollIntoView()
            .find(homePage.elements.cardElement())
            .find(homePage.elements.cardVisitButton())
            .should('contain', homePage.visitStr)

        //Checks for the visit button in the small card elements
        cy.get(homePage.elements.componentsCardsSection())
            .find(homePage.elements.cardElementSmall())
            .find(homePage.elements.cardVisitButton())
            .should('contain', homePage.visitStr)
    });
})

