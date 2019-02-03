import { expect } from 'chai';
import { createAccountPage } from '../pages/createAccountPage';

describe('Create Account form', () => {

    before(() => {
        createAccountPage.openCreateAccountPage();
    });

    it('should create new User Account', () => {
        createAccountPage.createAccount();
        expect($(createAccountPage.alertSuccess).isVisible()).to.be.true;

    });

});
