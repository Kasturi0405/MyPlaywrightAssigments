import { BasePageNew } from "./basePage";
import { PageRules } from "./pageRules";

class ProductPage extends BasePageNew implements PageRules {
    verifyPage() {
        console.log("Product page Verified")
    }

    searchProduct() {
        console.log("Searching the product")
    }
    addToCart() {
        console.log("Item is added to the cart")
    }
}
