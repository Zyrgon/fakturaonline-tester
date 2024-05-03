class ContactTransactions {

    assertTotal(amount) {
        cy.get('ul[class*="quick--statistics"]').within((statistics) => {
            cy.get('li')
                .eq(4)
                .find('strong')
                .invoke('text')
                .then((text) => {
                    expect(text.replace(/\s/g, '')).to.eq(amount)
            })
        })
    }

    assertTotalNumberOfInvoices(amount) {
        cy.get('ul[class*="quick--statistics"]').within((statistics) => {
            cy.get('li')
                .eq(4)
                .find('small')
                .invoke('text')
                .then((text) => {
                    expect(text.replace(/\s/g, '')).to.contain(amount)
                })
        })
    }

}

export default ContactTransactions;