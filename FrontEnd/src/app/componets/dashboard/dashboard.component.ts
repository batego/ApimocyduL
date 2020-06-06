import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalUserActive: number;
  totalUserinactive: number;
  totaluserByArea: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getUsersActive();
    this.getUserInactive();
    this.uByArea();
  }

  getUsersActive(){
    this.dashboardService.getTotalUsersActive().subscribe(
      res => {
        this.totalUserActive = res[0].totalactivos;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  getUserInactive(){
    this.dashboardService.gettotalUserInactive().subscribe(
      res => {
        this.totalUserinactive = res[0].totalinactivos;
        console.log(res);
      },
      err => console.log(err)
    );
  }

  uByArea(){
    this.dashboardService.userByArea().subscribe(
      res => {
        this.totaluserByArea = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
