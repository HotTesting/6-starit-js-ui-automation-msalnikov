import assert = require("assert");

describe('Litecart main page', function () {
    it('should be load Main page', function () {
        const title = browser.getTitle();
        browser.url('/')
        browser.waitForVisible('.col-xs-auto .logotype .fakeCSS')
        assert.strictEqual(title, 'My Store | Online Store')
    });
    
});
