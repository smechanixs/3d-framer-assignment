class pricingPage {
    elements = {
        priceText: () => cy.get('.framer-5fq1xp.price'),
        faqSectionQuestion: () => cy.get('.framer-8l13dv')
    }
}

module.exports = new pricingPage();