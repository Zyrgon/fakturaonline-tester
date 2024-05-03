class ContactInvoices {

    assertInvoiceInList(invoice) {
        cy.contains('tr[class*="el-table__row"]', invoice.id).within((row) => {
            cy.get('a[class="el-table__invoice-link"]').should('have.text', invoice.id)
            cy.contains('td', invoice.amount).should('be.visible')
        })

        //TODO Assert rest of attributes
    }

    createNewInvoice(){
        cy.get('div[class="invoices-list"]').find('button[class*="create-invoice-button"]').click()
    }

    //TODO rest of manipulation with invoice in list like delete, edit, send...
}

export default ContactInvoices;