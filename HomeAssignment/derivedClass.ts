import { WebComponent } from "./baseClass";

export class Button extends WebComponent {
    constructor(selector: string) {
        super(selector); // Call the parent constructor
    }
    click() {
        super.click()
        console.log("Clicking on the given button")
    }
}