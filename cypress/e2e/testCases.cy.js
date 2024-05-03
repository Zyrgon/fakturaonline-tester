const fixtures = require('../fixtures/' + Cypress.env('currentDomain') + '.json')

describe('Contact page', () => {

  beforeEach(() => {
    cy.visitOnDomain('/', 'cz')
    cy.loginToApp(fixtures.login)

    cy.goToContactsSection()
  })

  it('cannot save empty contact', () => {

  });

  it('can create new contact', () => {

  });

  it('can edit contact', () => {

  });

  it('can delete contact', () => {

  });

  it('can search for contact', () => {

  });

  it('can create invoice for contact', () => {

  });

  it('can list invoice for contact', () => {

  });

});
