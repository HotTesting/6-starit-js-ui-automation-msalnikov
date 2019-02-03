import { MainPage } from './mainPage';

class PopularProductsTab extends MainPage {
    public readonly yellowDuck = '#box-popular-products .product[data-name="{productName}"]';

    /**
     * Clicks on selected product.
     * @param name Product name for selector (e.g. Yellow Duck).
     */
    public selectProductByName(name: string) {
        const productNameLocator = this.yellowDuck.replace('{productName}', name);
        $(productNameLocator).click();
    }
}

export const popularProductsTab = new PopularProductsTab();
