
const { faker } = require('@faker-js/faker');
class ContactHelper {

    generateNewRandomCzechContact() {
        return {
            "name": faker.person.fullName(),
            "web": faker.internet.url(),
            "phone": faker.phone.number(),
            "email": faker.internet.email(),
            "street": faker.location.streetAddress(),
            "city": faker.location.city(),
            "zip": faker.location.zipCode(),
            "country": "Česká republika"
        };
    }
}

export default ContactHelper;