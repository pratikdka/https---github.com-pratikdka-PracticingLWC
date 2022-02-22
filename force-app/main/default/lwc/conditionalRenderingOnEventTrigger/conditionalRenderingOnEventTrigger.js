import { LightningElement } from 'lwc';

export default class ConditionalRenderingOnEventTrigger extends LightningElement {
    inputText = null ;

    get checkText(){
        return this.inputText === 'GG'; 
    }

    changeHandler(event){
        this.inputText = event.target.value ;
    }
}