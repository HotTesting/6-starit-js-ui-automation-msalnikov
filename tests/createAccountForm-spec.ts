import { expect } from 'chai';

describe.only('Create Account form', () => {

    beforeEach(() => {
        browser.url('/create_account');
        browser.pause(500);
    });

    it('should create new User Account', () => {
        const firstName = '.form-control[name="firstname"]';
        const lastName = '.form-control[name="lastname"]';
        const country = 'select[name=country_code]';
        const email = '.col-md-6 .form-control[name="email"]';
        const password = '.col-md-6 .form-control[name="password"]';
        const confirmedPassword = '.col-md-6 .form-control[name="confirmed_password"]';
        const newsLetterCheckbox = '.checkbox [name="newsletter"]';
        const createAccountBtn = '.btn[name="create_account"]';
        const alertSuccess = '.alert-success';
        const alertDanger = '.alert-danger';
        const randomValue = Math.random().toString(36).slice(2);
        $(firstName).setValue(randomValue);
        $(lastName).setValue(randomValue);
        $(country).selectByValue('UA');
        $(email).setValue(`${randomValue}@email.com`);
        $(password).setValue('qwerty');
        $(confirmedPassword).setValue('qwerty');
        $(newsLetterCheckbox).click();
        expect($(newsLetterCheckbox).isSelected()).to.be.true;
        $(createAccountBtn).click();
        expect($(alertSuccess).isVisible()).to.be.true;
        expect($(alertDanger).isVisible()).to.be.false;
    });

});
