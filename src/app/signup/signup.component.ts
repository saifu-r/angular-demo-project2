import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent  implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  signupForm= this.formBuilder.group({
    name: [], 
    email: [],
    DOB: [],
    password: []
  })

  ngOnInit() {}

  signup(){
    console.log(this.signupForm.value);

    const dobValue = this.signupForm.value.DOB;
    if (dobValue) {
      const dobDate = new Date(dobValue);
      console.log(dobDate.toISOString().split('T')[0]);
    }
    
  }

}
