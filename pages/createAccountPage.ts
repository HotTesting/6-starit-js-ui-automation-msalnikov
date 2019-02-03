import * as faker from 'faker';

class CreateAccountPage {
    public readonly createAccountContainer = '#box-create-account';
    public readonly firstName = '.form-control[name="firstname"]';
    public readonly lastName = '.form-control[name="lastname"]';
    public readonly country = 'select[name=country_code]';
    public readonly email = '.col-md-6 .form-control[name="email"]';
    public readonly password = '.col-md-6 .form-control[name="password"]';
    public readonly confirmedPassword = '.col-md-6 .form-control[name="confirmed_password"]';
    public readonly newsLetterCheckbox = '.checkbox [name="newsletter"]';
    public readonly createAccountBtn = '.btn[name="create_account"]';
    public readonly alertSuccess = '.alert-success';

    /**
     * Opens Create Account page by URL.
     */
    public openCreateAccountPage() {
        browser.url('/create_account');
        browser.waitForVisible(this.createAccountContainer, 5000);
    }
    /**
     * Creates new account in the system.
     */
    public createAccount() {
        const password = faker.internet.password();
        $(this.firstName).setValue(faker.name.firstName());
        $(this.lastName).setValue(faker.name.lastName());
        $(this.country).selectByValue('UA');
        $(this.email).setValue(faker.internet.email());
        $(this.password).setValue(password);
        $(this.confirmedPassword).setValue(password);
        $(this.newsLetterCheckbox).click();
        $(this.createAccountBtn).click();
        browser.waitForVisible(this.alertSuccess, 5000);
    }
}

export const createAccountPage = new CreateAccountPage();
