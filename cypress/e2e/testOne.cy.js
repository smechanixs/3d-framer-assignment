import globalElements from "../pages/globalElements";
import pricingPage from "../pages/pricingPage";

describe('1. Check currency symbol in pricing page', () => {
    it('Should go to pricing page and check currency symbol', () => {
        cy.visit(globalElements.homePageUrl);
        cy.get(globalElements.headerElements.pricingPageNav())
            .click();
        cy.get(pricingPage.elements.priceText())
            .should('contain', '$');
    })
})

