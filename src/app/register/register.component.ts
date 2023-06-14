import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  empid: any;
  empname: any;
  empdesig: any;
  empsalary: any

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  registerForm = this.fb.group({

    empid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    empname: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    empdesig: ['', [Validators.required, Validators.pattern('[A-Za-z]+')]],
    empsalary: ['', [Validators.required, Validators.pattern('[0-9]+')]]

  })

  register() {
    var empid = this.registerForm.value.empid
    var empname = this.registerForm.value.empname
    var empdesig = this.registerForm.value.empdesig
    var empsalary = this.registerForm.value.empsalary

    if (this.registerForm.valid) {
      const result = this.ds.register(empid, empname, empdesig, empsalary)
      if (result) {
        alert('Registered')
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert('User Already Present')
      }
    }
    else {
      alert('Invalid Form')
    }
  }

}
