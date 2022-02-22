import { LightningElement } from 'lwc';

export default class ToggleTemplateDemo extends LightningElement {
toggleText = false;
toggleHandler(){
this.toggleText = !this.toggleText
}
}