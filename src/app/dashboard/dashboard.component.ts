import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private ds: DataService, private router: Router) {

  }

  empid: any
  empname: any
  empid1: any
  empdesig: any
  empsalary: any

  search() {
    const result = this.ds.search(this.empid)

    if (result) {
      this.empname = this.ds.empDetails[this.empid]["empname"]
      this.empid1 = this.ds.empDetails[this.empid]["empid"]
      this.empdesig = this.ds.empDetails[this.empid]["desig"]
      this.empsalary = this.ds.empDetails[this.empid]["salary"]
    }
    else {
      alert('Employee Not Found')
    }
  }
}
