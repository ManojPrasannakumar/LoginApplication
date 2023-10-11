import { Component } from '@angular/core';
import UsersJson from './users.json';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
  
interface USERS {
    id: Number;
    name: String;
    username: String;
    email: String;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  Users: USERS[] = UsersJson;
  loginStatus: boolean;

  constructor(private authServ:AuthServiceService,
    private router:Router) {}

  logoff(){
    this.authServ.logoff.subscribe((loginStatus)=>{
      this.loginStatus = false;
      this.router.navigate(["logout"]);
    })
  }
}
