import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {}
  
  isLogin = new BehaviorSubject<{token:string}|null>(null);
  logoff = new BehaviorSubject<{token:string}|null>(null);
  
  url='http://localhost:3000/login';
  
  loginUser({email,password}:{email:string,password:string}){
    return this.http.post(this.url,{
      email,
      password
    })
  }

  localLoginStatus: boolean= false;
  globalLoginStatus= new BehaviorSubject<boolean>(false);

  checkAuth(){
    return new Promise((resolve,reject)=>{
      resolve(this.localLoginStatus);
    })
  }

  login(){
    this.localLoginStatus = true;
    this.globalLoginStatus.next(true);
  }

  logout(){
    this.localLoginStatus = false;
    this.globalLoginStatus.next(false);
  }

}
