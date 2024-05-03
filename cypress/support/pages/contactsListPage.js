class ContactsListPage {
    searchForContact(contactName) {
        cy.intercept('**/contacts/search*').as('searchRequest')
        cy.get('form[class*="contact-search"]').find('input').type(contactName)

        cy.wait('@searchRequest')
    }

    assertActionSuccess(contactName){
        cy.get('div[class*="el-alert--success"]').should('include.text', contactName)
        this.assertInList(contactName)
    }

    sortListByCell(cell, direction){
        cy.get('table[class="el-table__header"]').contains('div', cell).find('i[class*='+ direction + ']').click()
    }

    assertInList(contactName) {
        cy.get('tr[class="el-table__row"]').contains('a', contactName).should('be.visible')
    }

    assertNotInList(contactName) {
        cy.get('tr[class="el-table__row"]').contains('a', contactName).should('not.exist')
    }

    openContactDetail(contact) {
        cy.get('tr[class="el-table__row"]').contains('a', contact).click();
    }

    editContact(contact) {
        cy.get('tr[class="el-table__row"]').contains(contact).parents('.el-table__row').within(() => {
            cy.get('i[class*="icon-edit"]').scrollIntoView().click({force: true})
        })
    }

    createNewInvoice(contact) {
        cy.get('tr[class="el-table__row"]').contains(contact).parents('.el-table__row').within(() => {
            cy.get('i[class*="icon-new-invoice"]').scrollIntoView().click({force: true})
        })
    }

    addNewContact() {
        cy.get('div[class="table-heading"]').find('button').click()
    }
}

export default ContactsListPage;