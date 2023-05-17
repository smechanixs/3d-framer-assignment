import globalElements from '../pages/globalElements'
import pricingPage from '../pages/pricingPage'

describe('13. Check if the free plan have $0/mo on the card', () => {
    it('navigates to the pricing page and and checks if the price tag of the free plan card is $0/mo or 0$/mo', () => {
        cy.visit(globalElements.homePageUrl)
        cy.get(globalElements.headerElements.pricingPageNav())
            .click()
        cy.get(pricingPage.elements.freePlanCard())
            .contains(pricingPage.elements.freePlanCardPriceTag(), RegExp('^(\\$0|0\\$)\\/mo$'))
    })
})