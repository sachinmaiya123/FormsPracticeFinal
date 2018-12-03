import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule,  FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data: object[];
  constructor(private myService: DataService) { }
  myForm: FormGroup;
  emailId: FormControl;
  password: FormControl;
  contactNo: FormControl;
  public test = 'asa';
  //  userDetails: object[] = [{name: 'sachin', password: 1234, cno: 12121}, {name: 'Sandeep', password: 44, cno: 455}];

  ngOnInit() {
    this.data = this.myService.getData();
    // console.log( this.data);
    this.myForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      contactNo: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  loginSubmit() {
    // console.log(this.myForm.value);
    this.data.push(this.myForm.value);
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }

}
