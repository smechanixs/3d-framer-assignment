class globalElements {
    homePageUrl = 'https://mind-wend-913065.framer.app'
    componentsPageUrl = 'https://mind-wend-913065.framer.app/components'
    updatesPageUrl = 'https://mind-wend-913065.framer.app/updates'
    fullHDRW = 1920
    fullHDRH = 1080
    pageOverlay = '.framer-1fdeldd'

    headerElements = {
        pricingPageNav: () => '.framer-1g3amks-container',
        componentsPageNav: () => '.framer-15kr31b-container',
        updatesPage: () => '.update-nav-button'

    }
    footerElements = {
        subscribeSection: () => '.framer-l3ry8h',
        signupButton: () => '[type="submit"]'
    }
}

module.exports = new globalElements();
