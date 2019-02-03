import { expect } from 'chai';
import { login } from '../pages/loginPage';

describe('login page', () => {

    before(() => {
        browser.url('/');
    });

    it('should login by existing user', () => {
        login.doLogin('max@mail.com', 'qwerty');
        expect($(login.alertSuccess).isVisible()).to.be.true;
    });
});
