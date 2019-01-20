import { expect } from "chai"

describe('Customer Service form', function() {

    beforeEach(function() {
        browser.url('/customer-service-s-0');
        browser.pause(500);
    });

    it('should navigate to Customer Service form', function() {
        const customerServiceLink = '.customer-service'
        const contactUsContainer = '#box-customer-service'
        browser.url('/')
        browser.pause(500);
        $(customerServiceLink).click()
        browser.pause(500);
        expect($(contactUsContainer).isVisible()).to.be.true;
    });

    it('should submit Customer Service form', function() {
        const fieldLocators = {
            name: 'form[name="contact_form"] [name="name"]',
            email: 'form[name="contact_form"] [name="email"]',
            subject: 'form[name="contact_form"] [name="subject"]',
            message: 'form[name="contact_form"] [name="message"]',
            sendBtn: 'form[name="contact_form"] [name="send"]'
        };
        const successMessage = $('.alert-success');
        $(fieldLocators.name).setValue('Name text');
        $(fieldLocators.email).setValue('address@mail.com');
        $(fieldLocators.subject).setValue('Subject text');
        $(fieldLocators.message).setValue('Message text');
        $(fieldLocators.sendBtn).click();
        expect(successMessage.isVisible()).to.be.true;
    });

    it('should contain correct address information', function() {
        const address = $('.address').getText();
        const phone = $('.phone').getText();
        const email = $('.email').getText();
        const expectedAddressValues = {
            address: 'My Store\nStreet\nPostcode City\nCountry',
            phone: '+1-212-555-DUCK',
            email: 'store@email.com'
        };
        expect(address).to.be.equal(expectedAddressValues.address);
        expect(phone).to.be.equal(expectedAddressValues.phone);
        expect(email).to.be.equal(expectedAddressValues.email);
    });
});
