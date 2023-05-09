import globalElements from "../pages/globalElements";
import pricingPage from "../pages/pricingPage";

describe('1. Check currency symbol in pricing page', () => {
    it('Should go to pricing page and check currency symbol', () => {
        cy.visit(globalElements.homePageUrl);
        globalElements.headerElements.pricingPageNav().click();
        pricingPage.elements.priceText().should('contain', '$');
    })
})

