import * as faker from 'faker';
import { CustomerDetails } from '../pages/shoppingCartPage';

export class OrderDetailsBuilder {
    /**
     * Input data that overrides default data for builder.
     */
    private overridden = {};

    /**
     * Input data for builder.
     */
    private default = {
        address1: faker.address.streetAddress(),
        city: faker.address.city(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phone: faker.phone.phoneNumberFormat(),
        postalCode: '123456',
        country: 'AF'

    };

    /**
     * Performs data entry with invalid values.
     */
    public withInvalidUser() {
        this.overridden = {
            firstName: '',
            lastName: '',
            phone: ''
        };
        return this;
    }

    /**
     * Creates a new object with data values for customer details fields.
     */
    public build(): CustomerDetails {
        return Object.assign({}, this.default, this.overridden);
    }
}
