import { LightningElement,track,api } from 'lwc';

export default class Inputtext extends LightningElement {
    @api inputUser
handleChange(event){
this.inputUser = event.target.value;
console.log('user = '+this.inputUser);
const selectedEvent = new CustomEvent("itemsend", {
    detail: {
        inputUser: this.inputUser
        
    }
    
}
);
    console.log('event : '+ selectedEvent.detail.inputUser);
    // Dispatches the event.
   console.log(this.dispatchEvent(selectedEvent));
  // this.dispatchEvent(selectedEvent)
    console.log('event dispatched');
    
}
}