import globalElements from "../pages/globalElements"
import pricingPageElements from "../pages/pricingPage"

describe('2. Check pricing page if 4 question in the FAQ are present', () => {
    it('Goes to pricing page and check questions', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(globalElements.headerElements.pricingPageNav())
            .click()
        cy.get(pricingPageElements.elements.faqSection())
            .scrollIntoView()
            .children()
            .should('have.length', pricingPageElements.faqNumber)
    })
})