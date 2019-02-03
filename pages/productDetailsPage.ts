class ProductDetailsPage {
    public readonly productInfo = '#box-product';
    public readonly itemSize = 'select[name="options[Size]"]';
    public readonly quantity = '.input-group [name="quantity"]';
    public readonly addToCartBtn = 'button.btn-success';
    public readonly closePopUp = '.featherlight-close-icon';

    /**
     * Adds product to a shopping cart.
     * @param itemSize Optional parameter with product size.
     */
    public addToCart(itemSize?: string) {
        browser.waitForVisible(this.productInfo, 5000);
        if (itemSize) {
            $(this.itemSize).selectByValue(itemSize);
        }
        $(this.addToCartBtn).click();
        $(this.closePopUp).click();
    }
}

export const productDetails = new ProductDetailsPage();
