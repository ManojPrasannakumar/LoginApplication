import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm :FormGroup;

  constructor(private formbuild:FormBuilder,
    private http:HttpClient,private router:Router){}

  ngOnInit(){
    this.loginForm= this.formbuild.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }
  /* loginUser(){
    console.log('LoginUser', this.loginForm.value);
    this.authServ.isLogin.subscribe((loginData: any)=>{
      console.log('loginData',loginData);
    })
    this.authServ.loginUser(this.loginForm.value).subscribe(
      (res: any) =>  console.log('res',res),
      (err: any) => console.log('err',err)
    )
  } */


  login(){
    this.http.get<any>("http://localhost:3000/login")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return  a.email === this.loginForm.value.email && 
                a.password === this.loginForm.value.password 
      });
      if(user){
        console.log("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }
      else{
        console.log('User not found');
      }
      },
      err=>{
        console.log('User details cannot be read');
    })
  }

}
