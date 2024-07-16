import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  

  constructor(private formBuilder: FormBuilder) { }

  signinForm= this.formBuilder.group({
    email: [],
    password: []
  })

  ngOnInit() {}

  signin(){
    console.log(this.signinForm.value);
    
  }

}
