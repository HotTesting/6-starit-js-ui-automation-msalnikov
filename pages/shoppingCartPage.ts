import { MainPage } from './mainPage';

class ShoppingCartPage extends MainPage {
    public readonly itemsList = '.item';
    public readonly firstName = '.form-group [name="firstname"]';
    public readonly lastName = '.form-group [name="lastname"]';
    public readonly address = '.form-group [name="address1"]';
    public readonly city = '.form-group [name="city"]';
    public readonly postcode = '.form-group [name="postcode"]';
    public readonly country = '.form-group [name="country_code"]';
    public readonly email = '.form-group [name="email"]';
    public readonly phone = '.form-group [name="phone"]';
    public readonly saveChangesBtn = '.btn[name="save_customer_details"]';
    public readonly confirmOrderBtn = 'button[name="confirm_order"]';

    private typePhone(phone: string): any {
        browser.waitForVisible(this.phone, 5000);
        $(this.phone).setValue(phone);
    }

    private typeEmail(email: string): any {
        browser.waitForVisible(this.email, 5000);
        $(this.email).setValue(email);
    }

    private typeCity(city: string): any {
        browser.waitForVisible(this.city, 5000);
        $(this.city).setValue(city);
    }

    private typePostCode(postCode: string): any {
        browser.waitForVisible(this.postcode, 5000);
        $(this.postcode).setValue(postCode);
    }

    private typeAddress1(address1: string): any {
        browser.waitForVisible(this.address, 5000);
        $(this.address).setValue(address1);
    }

    private typeLastName(lastName: string): any {
        browser.waitForVisible(this.lastName, 5000);
        $(this.lastName).setValue(lastName);
    }

    private typeFirstName(firstName: string): any {
        browser.waitForVisible(this.firstName, 5000);
        $(this.firstName).setValue(firstName);
    }

    private typeCountry(country: string) {
        browser.waitForVisible(this.firstName, 5000);
        $(this.country).selectByValue(country);
    }

    public openShoppingCart() {
        $(this.shoppingCart).click();
        browser.waitForVisible(this.itemsList);
    }

    public saveChanges(): any {
        browser.waitForEnabled(this.saveChangesBtn, 5000);
        $(this.saveChangesBtn).click();
    }

    /**
     * Checks that confirm button is active and clicks it.
     */
    public confirmOrder(): any {
        browser.waitUntil(() => {
                return (browser.getAttribute('button[name="confirm_order"]', 'disabled') == null);
            }, 5000,
            'Confirm order button should become enabled to click, make sure that all required fields are filled'
        );
        $(this.confirmOrderBtn).click();
    }

    /**
     * Performs filling fields which described in CustomerDetails interface. Uses for OrderDetailsBuilder.build().
     * @param customerDetails Data type from CustomerDetails interface.
     */
    public proceedOrderWith(customerDetails: CustomerDetails): any {
        this.typeFirstName(customerDetails.firstName);
        this.typeLastName(customerDetails.lastName);
        this.typeAddress1(customerDetails.address1);
        this.typePostCode(customerDetails.postalCode);
        this.typeCity(customerDetails.city);
        this.typeEmail(customerDetails.email);
        this.typePhone(customerDetails.phone);
        // Filling optional fields
        if (customerDetails.country) {
            this.typeCountry(customerDetails.country);
        }
        this.saveChanges();
        this.confirmOrder();
    }

}

/**
 * Interface for filling fields with data by builder.
 */
export interface CustomerDetails {
    firstName: string;
    lastName: string;
    address1: string;
    postalCode: string;
    city: string;
    email: string;
    phone: string;
    company?: string;
    taxID?: string;
    country?: string;
    state?: string;
}

export const shoppingCart = new ShoppingCartPage();
