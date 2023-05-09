class componentsPage {
    visitStr = 'Visit'

    elements = {
        componentsCardsSection: () => cy.get('.components-container'),
        cardElement: () => '[data-framer-name="Card"]',
        cardElementSmall: () => '[data-framer-name="Card Small"]',
        cardVisitButton: () => '[data-framer-name="Button"]',
        watchVideoButton: () => cy.get('.watch-video-button'),
        getTheAppButton: () => cy.get('.get-app-button'),
        signupModal: () => cy.get('[data-framer-name="Modal"]'),
        mix3d2dComponentSection: () => cy.get('.3DComponent'),
        viewIn3dBtn: () => cy.get('.3D-button')
    }
}

module.exports = new componentsPage();