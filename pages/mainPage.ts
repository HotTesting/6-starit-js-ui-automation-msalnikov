export class MainPage {
    public readonly customerServiceLink = '.customer-service';
    public readonly popularProductsTab: string = 'a[href*="popular-products"]';
    public readonly shoppingCart = '#cart';
    public readonly cartQuantity = '#cart .quantity';

    /**
     * Opens popular products tab.
     */
    public openPopularProductsTab() {
        $(this.popularProductsTab).click();
    }

    /**
     * Checks items quantity in shopping cart.
     * @param quantity Quantity of items.
     */
    public checkCartQuantity(quantity: string) {
        browser.waitUntil(() => {
            return $(this.cartQuantity).getText() === quantity;
        }, 2000, `There is more/less than ${quantity} item in shopping cart`);
    }
}

export const mainPage = new MainPage();
