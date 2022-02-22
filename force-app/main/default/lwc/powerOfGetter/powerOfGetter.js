import { LightningElement } from 'lwc';

export default class PowerOfGetter extends LightningElement {
title = 'This is a getter Power'
get getTitle(){
  return this.title.toUpperCase()
}
}