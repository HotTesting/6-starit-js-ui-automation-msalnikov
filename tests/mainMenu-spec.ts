import { expect } from "chai"

describe('Litecart main page', function() {
    beforeEach(function () {
        browser.url('/')
        browser.waitForVisible('.col-xs-auto .logotype')
    });

    it('should be load Main page', function() {
        const title = browser.getTitle();
        expect(title).to.equal('My Store | Online Store')
    });
});
