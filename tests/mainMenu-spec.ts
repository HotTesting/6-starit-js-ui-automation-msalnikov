import { expect } from 'chai';

describe('Litecart main page', () => {
    before(() => {
        browser.url('/');
        browser.waitForVisible('.col-xs-auto .logotype');
    });

    it('should be load Main page', () => {
        const title = browser.getTitle();
        expect(title).to.equal('My Store | Online Store');
    });
});
