import * as faker from 'faker';
import { MainPage } from './mainPage';

class CustomerService extends MainPage {
    public readonly contactUsContainer = '#box-customer-service';
    public readonly email = 'form[name="contact_form"] [name="email"]';
    public readonly message = 'form[name="contact_form"] [name="message"]';
    public readonly name = 'form[name="contact_form"] [name="name"]';
    public readonly sendBtn = 'form[name="contact_form"] [name="send"]';
    public readonly subject = 'form[name="contact_form"] [name="subject"]';
    public readonly successMessage = '.alert-success';

    public readonly companyAddress = '.address';
    public readonly companyPhone = '.phone';
    public readonly companyEmail = '.email';
    public readonly expectedAddressValues = {
        companyAddress: 'My Store\nStreet\nPostcode City\nCountry',
        companyPhone: '+1-212-555-DUCK',
        companyEmail: 'store@email.com'
    };

    /**
     * Opens Customer Service page from Main Menu.
     */
    public goToCustomerServiceFromMainPage() {
        browser.url('/');
        $(this.customerServiceLink).click();
        browser.waitForVisible(this.contactUsContainer, 2000);
    }

    public submitCustomerForm() {
        $(this.name).setValue(faker.name.firstName());
        $(this.email).setValue(faker.internet.email());
        $(this.subject).setValue(faker.lorem.words());
        $(this.message).setValue(faker.lorem.paragraph());
        $(this.sendBtn).click();
        browser.waitForVisible(this.successMessage, 2000);
    }
}

export const customerService = new CustomerService();
