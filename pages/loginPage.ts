class LoginPage {
    public readonly signInDropdown: string = '.account.dropdown';
    public readonly emailField: string = '.form-control[name="email"]';
    public readonly passwordField: string = '.form-control[name="password"]';
    public readonly signInBtn: string = '.btn[name="login"]';
    public readonly alertSuccess: string = '.alert-success';

    /**
     * Performs login by existing user.
     * @param email Email of existing user.
     * @param password Password of existing user.
     */
    public doLogin(email: string, password: string): any {
        browser.waitForVisible('.account.dropdown', 2000);
        $(this.signInDropdown).click();
        $(this.emailField).setValue(email);
        $(this.passwordField).setValue(password);
        $(this.signInBtn).click();
        browser.waitForVisible(this.alertSuccess, 2000);
    }
}

export const login = new LoginPage();
