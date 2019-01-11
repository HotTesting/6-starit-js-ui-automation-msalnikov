import assert = require("assert");

describe('Litecart main page', function () {
    it('should be load Main page', function () {
        browser.url('/')
        browser.waitForVisible('.col-xs-auto .logotype')
        const title = browser.getTitle();
        assert.strictEqual(title, 'My Store | Online Store')
    });

});
