import { LightningElement } from 'lwc';

export default class TemplateIfTrue extends LightningElement {
showtext = false;
showHandler(){
this.showtext = true;
}
}