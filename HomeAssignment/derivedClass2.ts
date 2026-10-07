import { WebComponent } from "./baseClass";

export class TextInput extends WebComponent {

    constructor(selector: string) {
        super(selector); // Call the parent constructor
    }
    value: string = ""
    enterText(text: string) {
        this.value = text
        console.log("Simulating text entry ", this.value)
    }
}
