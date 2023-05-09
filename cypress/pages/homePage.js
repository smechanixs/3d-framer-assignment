class homePage {
    visitStr = 'Visit'

    elements = {
        componentsCardsSection: () => '.components-container',
        cardElement: () => '[data-framer-name="Card"]',
        cardElementSmall: () => '[data-framer-name="Card Small"]',
        cardVisitButton: () => '[data-framer-name="Button"]',
        watchVideoButton: () => '.watch-video-button',
        getTheAppButton: () => '.get-app-button',
        signupModal: () => '[data-framer-name="Modal"]',
        mix3d2dComponentSection: () => '.3DComponent',
        viewIn3dBtn: () => '.3D-button',
        priceText: () => '.framer-5fq1xp.price',
        faqSectionQuestion: () => '.framer-8l13dv',
        tSVOSection: () => '.framer-5m0ard',
        getTheAppButtonTSVOSection: () => '.framer-12ihm1b'
    }
}

module.exports = new homePage();