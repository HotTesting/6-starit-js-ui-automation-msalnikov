import { expect } from 'chai';
import * as faker from 'faker';

describe('Buying products', () => {
    before(() => {
        browser.url('/');
    });

    function getElement(cssAsString: string) {
        return $(cssAsString);
      }

    it('should buy one item', () => {
        const popularProductsTab = 'a[href*="popular-products"]';
        const purpleDuck = '#box-popular-products .product[data-name="Purple Duck"]';
        const shoppingCart = '#cart';
        const addToCartBtn = 'button.btn-success';
        const productInfo = '#box-product';
        const closePopUp = '.featherlight-close-icon';
        const cartQuantity = '#cart .quantity';
        const itemsList = '.item';
        const firstName = '.form-group [name="firstname"]';
        const lastName = '.form-group [name="lastname"]';
        const address = '.form-group [name="address1"]';
        const city = '.form-group [name="city"]';
        const postcode = '.form-group [name="postcode"]';
        const country = '.form-group [name="country_code"]';
        const email = '.form-group [name="email"]';
        const phone = '.form-group [name="phone"]';
        const saveChangesBtn = '.btn[name="save_customer_details"]';
        const confirmOrder = '.btn-success';
        const orderSuccessPage = '#box-order-success';
        getElement(popularProductsTab).click();
        getElement(purpleDuck).click();
        browser.waitForVisible(productInfo);
        getElement(addToCartBtn).click();
        getElement(closePopUp).click();
        const waitCartQuantity = browser.waitUntil(() => {
            return getElement(cartQuantity).getText() === '1';
        }, 2000, 'There is more/less than 1 item in shopping cart', 100);
        expect(waitCartQuantity).to.be.true;
        getElement(shoppingCart).click();
        browser.waitForVisible(itemsList);
        expect($$(itemsList).length).to.be.equal(1);
        getElement(firstName).setValue(faker.name.firstName());
        getElement(lastName).setValue(faker.name.lastName());
        getElement(address).setValue(faker.address.streetAddress());
        getElement(city).setValue(faker.address.city());
        getElement(postcode).setValue(123456);
        getElement(country).selectByValue('AF');
        getElement(email).setValue(faker.internet.email());
        getElement(phone).setValue(faker.phone.phoneNumberFormat());
        getElement(saveChangesBtn).click();
        browser.waitForEnabled(confirmOrder);
        getElement(confirmOrder).click();
        expect(browser.waitForVisible(orderSuccessPage)).to.be.true;
    });
});
