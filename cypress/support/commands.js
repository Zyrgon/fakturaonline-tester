

  Cypress.Commands.add('visitOnDomain', (args, domain = Cypress.env('currentDomain')) => {
    const customVisitCommand = `visit${domain.charAt(0).toUpperCase()}${domain.slice(1)}`;
    cy[customVisitCommand](args);
  });

  Cypress.Commands.add('visitCz', (args) => {
    cy.visit(`https://dev.fakturaonline.cz${args}`);
  });

  Cypress.Commands.add('visitCom', (args) => {
    cy.visit(`https://dev.invoiceonline.com${args}`);
  });

  Cypress.Commands.add('visitSk', (args) => {
    cy.visit(`https://dev.fakturaonline.sk${args}`);
  });

  Cypress.Commands.add('loginToApp', (user) => {
    cy.get('button[class*="login-button"]').click()

    cy.get('#email').type(user.email)
    cy.get('#current-password').type(user.password)

    cy.get('button[data-analytics-id="button.login"]').click()
  })
