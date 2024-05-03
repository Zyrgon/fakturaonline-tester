import ContactInvoices from './contactDetail/contactInvoices';
import ContactTransactions from './contactDetail/contactTransactions';
import AddContactPage from './addContactPage';

class ContactDetailPage {
    constructor() {
        this.contactInvoices = new ContactInvoices()
        this.contactTransactions = new ContactTransactions()
        this.editContact = new AddContactPage()
    }

    makeNewInvoiceForContact() {
        this.contactInvoices.createNewInvoice()
    }

}

export default ContactDetailPage;