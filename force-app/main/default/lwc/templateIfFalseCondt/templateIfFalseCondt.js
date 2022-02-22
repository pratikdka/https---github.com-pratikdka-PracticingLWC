import { LightningElement } from 'lwc';

export default class TemplateIfFalseCondt extends LightningElement {
    texttoappear = false;
    showHandler(){
        this.texttoappear = true;
    }

}