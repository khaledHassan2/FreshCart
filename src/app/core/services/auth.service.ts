
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private readonly _Http=inject(HttpClient);

  setRegisterForm(data:object):Observable<any>{
    return this._Http.post(`${environment.baseUrl}/api/v1/auth/signup`,data)
  }
  setLoginForm(data:object):Observable<any>{
    return this._Http.post(`${environment.baseUrl}/api/v1/auth/signin`,data)
  }
 userData:any;
  saveUserData(){
    if (localStorage.getItem('userToken') != null) {
     this.userData = jwtDecode(localStorage.getItem('userToken') !)
      
    }
   
  }

 private readonly _Router=inject(Router)
logOut():void{
  localStorage.removeItem('userToken');
  this._Router.navigate(['/login']);
  this.userData=null;

}

// Forgot Password

setVerifyEamil(data:object):Observable<any>{
  return this._Http.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`,data)
}

setVerifyCode(data:object):Observable<any>{
  return this._Http.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`,data)
}

setVerifyPassword(data:object):Observable<any>{
  return this._Http.put(`${environment.baseUrl}/api/v1/auth/resetPassword`,data)
}


}
