import { expect } from 'chai';

describe('Customer Service form', () => {

    beforeEach(() => {
        browser.url('/customer-service-s-0');
        browser.pause(500);
    });

    it('should navigate to Customer Service form', () => {
        const customerServiceLink = '.customer-service';
        const contactUsContainer = '#box-customer-service';
        browser.url('/');
        browser.pause(500);
        $(customerServiceLink).click();
        browser.pause(500);
        expect($(contactUsContainer).isVisible()).to.be.true;
    });

    it('should submit Customer Service form', () => {
        const fieldLocators = {
            email: 'form[name="contact_form"] [name="email"]',
            message: 'form[name="contact_form"] [name="message"]',
            name: 'form[name="contact_form"] [name="name"]',
            sendBtn: 'form[name="contact_form"] [name="send"]',
            subject: 'form[name="contact_form"] [name="subject"]'
        };
        const successMessage = $('.alert-success');
        $(fieldLocators.name).setValue('Name text');
        $(fieldLocators.email).setValue('address@mail.com');
        $(fieldLocators.subject).setValue('Subject text');
        $(fieldLocators.message).setValue('Message text');
        $(fieldLocators.sendBtn).click();
        expect(successMessage.isVisible()).to.be.true;
    });

    it('should contain correct address information', () => {
        const address = $('.address').getText();
        const phone = $('.phone').getText();
        const email = $('.email').getText();
        const expectedAddressValues = {
            address: 'My Store\nStreet\nPostcode City\nCountry',
            email: 'store@email.com',
            phone: '+1-212-555-DUCK'
        };
        expect(address).to.be.equal(expectedAddressValues.address);
        expect(phone).to.be.equal(expectedAddressValues.phone);
        expect(email).to.be.equal(expectedAddressValues.email);
    });
});
