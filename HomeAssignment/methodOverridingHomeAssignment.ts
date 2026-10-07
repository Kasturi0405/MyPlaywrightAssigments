class BasePage {
    findElement() {
        console.log("Find element")
    }
    clickElement() {
        console.log("Click element")

    }
    enterText() {
        console.log("Enter text")

    }
    performCommonTasks() {
        console.log("Common tasks")

    }
}

class LoginPage extends BasePage {
    performCommonTasks() {
        console.log("Common tasks performed on login page")

    }
}

let bp=new BasePage
let lp=new LoginPage

lp.findElement()
bp.clickElement()
bp.enterText()
bp.performCommonTasks()
lp.performCommonTasks()