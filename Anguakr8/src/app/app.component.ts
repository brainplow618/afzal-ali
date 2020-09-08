import { Component } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productsForm: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(){
 
  this.createForm();
  }
  public createForm(){
    this.productsForm = this.fb.group({
      category:['']
    });
  }
  shoeData(){
    console.log(this.productsForm.value);
  }
}
