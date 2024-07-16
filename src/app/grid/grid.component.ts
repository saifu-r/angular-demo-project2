import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent  implements OnInit {

  constructor( private formBuilder : FormBuilder ) { }

    dateForm= this.formBuilder.group({
      date: []
    })

    timeForm= this.formBuilder.group({
      time: []
    })

  ngOnInit() {}

  submitDate(){
    console.log(this.dateForm.value);
    
  }

  submitTime(){
    console.log(this.timeForm.value);
    
  }

}
