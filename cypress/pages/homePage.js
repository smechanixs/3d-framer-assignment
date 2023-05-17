class homePage {

    elements = {
        componentsCardsSection: () => '.framer-160eo7j.components-container',
        cardVisitButton: () => '.visit-button',
        watchVideoButton: () => '.watch-video-button',
        getTheAppButton: () => '.get-app-button',
        watchVideoText: () => 'Watch video',
        getTheAppButtonText: () => 'Get the App',
        signupModal: () => '[data-framer-name="Modal"]',
        mix3d2dComponentSection: () => '.3DComponent',
        btnSection: () => '.framer-15y7aei',
        viewIn3dBtn: () => '.3D-button',
        tSVOSection: () => '.framer-5m0ard',
        getTheAppButtonTSVOSection: () => '.framer-12ihm1b',
        animation3d: () => 'iframe'
    }
}

module.exports = new homePage();

