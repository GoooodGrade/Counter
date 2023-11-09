import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
   Number: number =5;
   onIncrease()
   {
    this.Number++;
   }
   onDescrease()
   {
    this.Number--;
   }
   onReset()
   {
    this.Number=5;
   }
   get buttonHiddenIfNumberbigger10()
   {
    return this.Number<=10;
   }

   get buttonHiddenIfNumberlower0()
   {
    return this.Number>=0;
   }
   get TextBackgroundColor()
   {
    if(this.Number>10)
    {
      return 'red';
    }
    else if(this.Number<0)
    {
      return 'lightgreen';
    }
    else
    {
      return 'orange';
    }
   }
}
