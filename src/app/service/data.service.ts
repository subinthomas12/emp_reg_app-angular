import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  empDetails: any = {
    1000: { empname: "Athif", empid: 1000, desig: "DEVELOPER", salary: 50000 },
    1001: { empname: "Agosh", empid: 1001, desig: "DESIGNER", salary: 40000 },
    1002: { empname: "Badhu", empid: 1002, desig: "TESTOR", salary: 35000 },
    1003: { empname: "Sachin", empid: 1003, desig: "HR", salary: 30000 },
    1004: { empname: "Sha", empid: 1004, desig: "ANALYST", salary: 45000 }

  }

  constructor() { }

  search(empid: any) {
    if (empid in this.empDetails) {
      return true
    }
    else {
      return false
    }
  }




  register(eid: any, ename: any, des: any, sal: any) {
    var empDetails = this.empDetails
    if (eid in empDetails) {
      return false
    }
    else {
      empDetails[eid] = { empname: ename, empid: eid, desig: des, salary: sal }
      return true
    }
  }




  admin: any = { aid: "admin", password: "admin" }

  login(aid: any, psw: any) {

    if (aid == "admin") {
      if (psw == "admin") {
        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }

  }


}
