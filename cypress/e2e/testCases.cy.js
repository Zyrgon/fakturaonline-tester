const fixtures = require('../fixtures/' + Cypress.env('currentDomain') + '.json')

import ContactsListPage from '../support/pages/contactsListPage'
import AddContactPage from '../support/pages/addContactPage'
import ContactHelper from '../support/helpers/contactHelper'
import ContactDetailPage from '../support/pages/contactDetailPage';

describe('Contact page', () => {
  const contactListPage = new ContactsListPage()
  const addContactPage = new AddContactPage()
  const contactHelper = new ContactHelper()
  const contactDetailPage = new ContactDetailPage()

  beforeEach(() => {
    cy.visitOnDomain('/', 'cz')
    cy.loginToApp(fixtures.login)

    cy.goToContactsSection()
  })

  it('cannot save empty contact', () => {
    contactListPage.addNewContact()
    addContactPage.saveChanges()

    cy.get('div[class="el-form-item__error"]').should('have.length', 1)
  });

  it('can create new contact', () => {
    const newContact = contactHelper.generateNewRandomCzechContact();
    contactListPage.addNewContact()

    addContactPage.fillDetails(newContact)
    addContactPage.saveChanges()

    contactListPage.assertActionSuccess(newContact.name)

    //TODO cleanup via API after end of the test
  });

  it('can edit contact', () => {
    contactListPage.editContact(fixtures.contacts[0].name)

    addContactPage.fillDetails(fixtures.contacts[0])
    addContactPage.saveChanges()

    contactListPage.assertActionSuccess(fixtures.contacts[0].name)
  });

  xit('can delete contact', () => {
    //TODO Deleting prepared contact after API create
  });

  it('can search for contact', () => {
    contactListPage.searchForContact(fixtures.contacts[0].name)
    contactListPage.assertInList(fixtures.contacts[0].name)
    contactListPage.assertNotInList(fixtures.contacts[1].name)
  });

  it('can sort contact list', () => {
    //TODO Add asserts remembering lists before and after change, compare not same
    contactListPage.sortListByCell(fixtures.sorting.sortAttribute, "ascending")
    contactListPage.sortListByCell(fixtures.sorting.sortAttribute, "descending")
  });

  it('can create invoice for contact from contact list', () => {
    contactListPage.createNewInvoice(fixtures.contacts[0].name)
  });

  it('can create invoice for contact from contact detail', () => {
    contactListPage.openContactDetail(fixtures.contacts[0].name)

    contactDetailPage.makeNewInvoiceForContact()
  });

  it('can list invoices for contact', () => {
    contactListPage.openContactDetail(fixtures.contacts[0].name)

    contactDetailPage.contactTransactions.assertTotal(fixtures.contacts[0].totalInvoiced)
    contactDetailPage.contactTransactions.assertTotalNumberOfInvoices(fixtures.contacts[0].numberOfInvoices)
    contactDetailPage.contactInvoices.assertInvoiceInList(fixtures.contacts[0].invoices[0])
  });

});
