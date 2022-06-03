import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

declare var jQuery: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sendData(DataFromForm:NgForm){

    console.log("Data From Form:",DataFromForm.value);
    alert("Thank you..! we will get back to you as Soon as Possible");
  }

  
  constructor() { }

  ngOnInit(): void {
  }
  
}
