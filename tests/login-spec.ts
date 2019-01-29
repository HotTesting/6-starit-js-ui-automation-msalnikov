import { expect } from 'chai';

describe('login page', () => {
    before(() => {
        browser.url('/');
    });

    it('should login by existing user', () => {
        const signInDropdown = $('.account.dropdown');
        const emailField = $('.form-control[name="email"]');
        const passwordField = $('.form-control[name="password"]');
        const signInBtn = $('.btn[name="login"]');
        const alertSuccess = '.alert-success';
        signInDropdown.click();
        emailField.setValue('max@mail.com');
        passwordField.setValue('qwerty');
        signInBtn.click();
        expect($(alertSuccess).isVisible()).to.be.true;
    });
});
