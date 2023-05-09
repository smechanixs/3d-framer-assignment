class globalElements {
    homePageUrl = 'https://mind-wend-913065.framer.app'
    updatesPageUrl = 'https://mind-wend-913065.framer.app/updates'
    fullHDRW = 1920
    fullHDRH = 1080

    headerElements = {
        pricingPageNav: () => cy.get('.framer-1g3amks-container'),
        updatesPage: () => cy.get('.update-nav-button')
    }
    footerElements = {
        subscribeSection: () => cy.get('.framer-l3ry8h'),
        signupButton: () => '[type="submit"]'
    }
}

module.exports = new globalElements();
