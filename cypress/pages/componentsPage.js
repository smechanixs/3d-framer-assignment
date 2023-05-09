class componentsPage {
    visitStr = 'Visit'

    elements = {
        componentsCardsSection: () => cy.get('.components-container'),
        cardElement: () => '[data-framer-name="Card"]',
        cardElementSmall: () => '[data-framer-name="Card Small"]',
        cardVisitButton: () => '[data-framer-name="Button"]',
        watchVideoButton: () => '.watch-video-button',
        getTheAppButton: () => '.get-app-button',
        signupModal: () => '[data-framer-name="Modal"]',
        mix3d2dComponentSection: () => '.3DComponent',
        viewIn3dBtn: () => '.3D-button'
    }
}

module.exports = new componentsPage();