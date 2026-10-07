import {Button} from './derivedClass'
import {TextInput} from './derivedClass2'

function testComponents(){
let bu=new Button('#button')
let ti=new TextInput('#input')

bu.focus()
bu.click()

ti.enterText("hello")
}

testComponents()
