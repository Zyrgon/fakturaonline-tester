class AddContactPage {

    assertDetails(contact) {
        cy.get('input[name="invoice_attributes_name"]').should('have.text', contact.name)

        //TODO Assert rest of attributes
    }

    fillDetails(newContact) {
        cy.get('input[name="invoice_attributes_name"]').clear().type(newContact.name)

        //TODO Filling rest of attributes
    }

    saveChanges() {
        cy.get('div[class="form-actions"]').find('i[class*="icon-save"]').click()
    }
}

export default AddContactPage;