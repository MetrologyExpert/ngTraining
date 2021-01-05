import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {

  username:string ="";
  count;
  status;
  onDisplay = false;
  buttonClicks = [];

  constructor() {
    
   }
  

  ngOnInit(): void {
  }

  statusCheck(){

    this.count  = this.username.length;

    if (this.count === 0) return this.status = true; 
       
  };

  delete(){

    this.username = "";

  }
  
  display() {

     this.buttonClicks.push(this.onDisplay = true);
     
     return this.buttonClicks;

  }

  everyFive(){
    if ((this.buttonClicks.length % 5) === 0) return 'blue' ;
  }

}
