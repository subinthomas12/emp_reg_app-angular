import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private ds: DataService, private router: Router) {


  }

  aid: any
  psw: any


  login() {
    const result = this.ds.login(this.aid, this.psw)

    if (result) {
      alert('login success')
      this.router.navigateByUrl('dashboard')
    }
    else {
      alert('Invalid User')
    }
  }
}

