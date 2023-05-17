class globalElements {
    homePageUrl = 'https://mind-wend-913065.framer.app'
    componentsPageUrl = 'https://mind-wend-913065.framer.app/components'
    updatesPageUrl = 'https://mind-wend-913065.framer.app/updates'
    pageOverlay = '.framer-vrqh0x'

    headerElements = {
        pricingPageNav: () => '.framer-1g3amks-container [data-framer-name="Variant 1"]',
        componentsPageNav: () => '.framer-15kr31b-container [data-framer-name="Variant 1"]',
        updatesPage: () => '.framer-7hrpx3-container [data-framer-name="Variant 1"]',
        signupButtonHeader: () => '.framer-1ghzv5z-container [data-framer-name="Variant 1"]'

    }
    footerElements = {
        subscribeSection: () => '.framer-l3ry8h',
        signupButton: () => '[style="position: relative;"] > input'
    }
}

module.exports = new globalElements();
