import globalElements from '../pages/globalElements'
import componentsPage from "../pages/componentsPage"

describe('3. "Visit" button is displayed in all cards in "Many types of components to customize section"', () => {
    it('Navigates to "Many types of components to customize section" and checks for "Visit" button in all cards in the section', () => {
        cy.visit(globalElements.homePageUrl)
        //Checks for the visit button in the normal card elements
        componentsPage.elements.componentsCardsSection().scrollIntoView()
            .find(componentsPage.elements.cardElement())
            .find(componentsPage.elements.cardVisitButton())
            .should('contain', componentsPage.visitStr)

        //Checks for the visit button in the small card elements
        componentsPage.elements.componentsCardsSection()
            .find(componentsPage.elements.cardElementSmall())
            .find(componentsPage.elements.cardVisitButton())
            .should('contain', componentsPage.visitStr)
    });
})

