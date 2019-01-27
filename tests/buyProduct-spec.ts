import { expect } from 'chai';
import * as faker from 'faker';

describe('Buying products', () => {
    beforeEach(() => {
        browser.url('/');
    });

    it('should buy 1 duck', () => {
        const popularProductsTab = $('a[href*="popular-products"]');
        const purpleDuck = $('#box-popular-products .product[data-name="Purple Duck"]');
        const shoppingCart = $('#cart');
        // FIXME: Why element could't be located when variable setted on this line?
        // const addToCartBtn = $('button.btn-success');
        const productInfo = ('#box-product');
        // FIXME: Why element could't be located when variable setted on this line?
        // const closePopUp = $('.featherlight-close-icon');
        const cartQuantity = $('#cart .quantity');
        popularProductsTab.click();
        purpleDuck.click();
        browser.waitForVisible(productInfo);
        const addToCartBtn = $('button.btn-success');
        const closePopUp = $('.featherlight-close-icon');
        addToCartBtn.click();
        closePopUp.click();
        const waitCartQuantity = browser.waitUntil(() => {
            return cartQuantity.getText() === '1';
        }, 2000, 'There is more/less than 1 item in shopping cart', 100);
        expect(waitCartQuantity).to.be.true;
        shoppingCart.click();
        const itemsList = '.item';
        browser.waitForVisible(itemsList);
        expect($$(itemsList).length).to.be.equal(1);
        // Doesn't work when this variables are on top!
        const firstName = $('.form-group [name="firstname"]');
        const lastName = $('.form-group [name="lastname"]');
        const address = $('.form-group [name="address1"]');
        const city = $('.form-group [name="city"]');
        const postcode = $('.form-group [name="postcode"]');
        const country = $('.form-group [name="country_code"]');
        const email = $('.form-group [name="email"]');
        const phone = $('.form-group [name="phone"]');
        const saveChangesBtn = $('.btn[name="save_customer_details"]');
        const confirmOrder = $('.btn-success');
        firstName.setValue(faker.name.firstName());
        lastName.setValue(faker.name.lastName());
        address.setValue(faker.address.streetAddress());
        city.setValue(faker.address.city());
        postcode.setValue(123456);
        country.selectByValue(faker.address.countryCode());
        email.setValue(faker.internet.email());
        phone.setValue(faker.phone.phoneNumberFormat());
        browser.pause(1000);

        console.log('LLLLL ' + confirmOrder.isEnabled());
        browser.pause(1000)
        saveChangesBtn.click();

        
        console.log('save btn clicked')
        browser.pause(4000)
        
        // browser.waitUntil(() => {
        //     return confirmOrder.isEnabled() === true;
        // }, 2000, 'Element is not enabled', 100);
        browser.waitForEnabled('.btn-success', 3000);
        console.log('OOOOOO ' + confirmOrder.isEnabled())
        confirmOrder.click();
        console.log('confirm btn clicked')
        // browser.pause(1000);
        /*
        const waitOrderSuccessPage = browser.waitUntil(() => {
            return $('box-order-success').isVisible() === true;
        }, 2000, 'Element is not visible', 100);
        expect(waitOrderSuccessPage).to.be.true;
        */
    });

});
