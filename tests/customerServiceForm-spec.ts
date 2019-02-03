import { expect } from 'chai';
import { customerService } from '../pages/customerService';

describe('Customer Service form', () => {

    beforeEach(() => {
        customerService.goToCustomerServiceFromMainPage();
    });

    it('should submit Customer Service form', () => {
        customerService.submitCustomerForm();
        expect($(customerService.successMessage).isVisible()).to.be.true;
    });

    it('should contain correct address information', () => {
        // FIXME: Refactor to comparison values from one object
        expect($(customerService.companyAddress).getText()).to.be.equal(customerService.expectedAddressValues.companyAddress);
        expect($(customerService.companyPhone).getText()).to.be.equal(customerService.expectedAddressValues.companyPhone);
        expect($(customerService.companyEmail).getText()).to.be.equal(customerService.expectedAddressValues.companyEmail);
    });
});
