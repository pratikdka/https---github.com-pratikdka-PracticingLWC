import { LightningElement,track } from 'lwc';

export default class DataBinding extends LightningElement {

fullname = "Pratik Khadka"
@track title = "Salesforce Developer"
changeHandler(event){
    this.title = event.target.value
}
}