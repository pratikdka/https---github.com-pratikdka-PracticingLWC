import { LightningElement } from 'lwc';

export default class PowerOfGetter extends LightningElement {

title = 'This is a getter Power';
selectedBtn = 'OFF';
get getTitle(){
return this.title.toUpperCase()
}
get boxStatus(){
// return this.selectedBtn === 'ON' ? 'box green' : 'box red' ;
return `box ${this.selectedBtn === 'ON' ? 'green':'red'}`
}
clickAction(event){
console.log(event.currentTarget.innerText);
this.selectedBtn = event.currentTarget.innerText;
}
}