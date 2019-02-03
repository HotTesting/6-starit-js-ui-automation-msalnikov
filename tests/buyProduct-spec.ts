import { expect } from 'chai';

import { mainPage } from '../pages/mainPage';
import { orderSuccessPage } from '../pages/orderSuccessPage';
import { popularProductsTab } from '../pages/popularProductsTab';
import { productDetails } from '../pages/productDetailsPage';
import { shoppingCart } from '../pages/shoppingCartPage';
import { OrderDetailsBuilder } from '../utils/OrderDetailsBuilder';

describe('Buying products:', () => {
    before(() => {
        browser.url('/');
    });

    it('should buy one item with size option', () => {
        mainPage.openPopularProductsTab();
        popularProductsTab.selectProductByName('Yellow Duck');
        productDetails.addToCart('Large');
        shoppingCart.checkCartQuantity('1');
        shoppingCart.openShoppingCart();
        expect($$(shoppingCart.itemsList).length).to.be.equal(1);
        shoppingCart.proceedOrderWith(new OrderDetailsBuilder().build());
        expect(browser.waitForVisible(orderSuccessPage.orderSuccessPage)).to.be.true;
    });

});
