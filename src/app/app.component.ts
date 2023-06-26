import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pure-impure-demo';
  empName: any;
  isFromAngularTeam = false;
  pureChange = false;

  empArray = [
    { name: 'Emp1', isFromAngularTeam: false },
    { name: 'Emp2', isFromAngularTeam: false }
  ]

  ngOnInit() {

  }

  addEmployee() {
    let addEmpObj = {
      name: this.empName,
      isFromAngularTeam: this.isFromAngularTeam
    }
    if (this.pureChange) {
      // console.log(this.pureChange);             
      // console.log(addEmpObj)
      this.empArray = this.empArray.concat(addEmpObj);
    } else {
      // console.log(addEmpObj);
      
      this.empArray.push(addEmpObj)
    }
  }


}
