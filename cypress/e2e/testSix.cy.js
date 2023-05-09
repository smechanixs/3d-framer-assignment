import globalElements from '../pages/globalElements'

describe('6. Check if "Updates" page is displayed', () => {
    it('Navigates to the "Updates" page', () => {
        cy.visit(globalElements.homePageUrl)
        globalElements.headerElements.updatesPage()
            .click()
            .url().should('eq', globalElements.updatesPageUrl)
    })
})