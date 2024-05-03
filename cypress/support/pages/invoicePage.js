Cypress.Commands.add('goToContactsSection', (user) => {
    cy.get('a[class*="navbar-navigation__link--contact"]').click()
})
