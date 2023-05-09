class pricingPage {
    elements = {
        priceText: () => '.framer-5fq1xp.price',
        faqSectionQuestion: () => '.framer-8l13dv',
        freePlanCard: () => '[data-framer-name="Free"]',
        freePlanCardPriceTag: () => '.framer-5fq1xp.price'
    }
}

module.exports = new pricingPage();