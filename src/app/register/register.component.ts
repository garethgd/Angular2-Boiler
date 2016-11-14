import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

registerUser(fname, lname, email, phone , country , address, billingAddress, sameAddress ){
    if(sameAddress == true)
    {
      billingAddress == sameAddress;
    }
  }
}
