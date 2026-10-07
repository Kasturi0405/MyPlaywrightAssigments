import { BasePageNew } from "./basePage";
import { PageRules } from "./pageRules";

class LoginPageNew extends BasePageNew implements PageRules {
    verifyPage() {
        console.log("Login page Verified")
    }
    enterUsername() {
        console.log("Typed username")
    }
    enterPassword() {
        console.log("Typed password")

    }
    clickLogin() {
        console.log("clicked on login button")
    }
}

let lp =new LoginPageNew
lp.waitForPageLoad()
lp.verifyPage()
lp.enterUsername()
lp.enterPassword()
lp.clickLogin()
lp.getPageTitle()