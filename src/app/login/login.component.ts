import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule,  FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // @Input() public parentData;
 constructor(private myService: DataService) { }
 data: object[];
  myForm: FormGroup;
  emailId: FormControl;
  password: FormControl;
  loginArray: any[] = [];
  ngOnInit() {
    this.data = this.myService.getData();
    this.myForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,

      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }
  loginSubmit() {
   // this.loginArray.push('this.myForm.value');
    for (let i = 0; i < this.data.length; i++) {
      // if (((this.data[i]).emailId == this.myForm.value.name)) {

      // }
        // console.log((this.data[i]).emailId);
    }
    // console.log(this.parentData);
  }
}
