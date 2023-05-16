class pricingPage {
    faqNumber = 4

    elements = {
        priceText: () => '.framer-5fq1xp.price',
        faqSection: () => '.framer-eabl6y',
        freePlanCard: () => '[data-framer-name="Free"]',
        freePlanCardPriceTag: () => '.framer-5fq1xp.price'
    }
}

module.exports = new pricingPage();