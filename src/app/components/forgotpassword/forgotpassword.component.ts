import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent implements OnDestroy{

  step:WritableSignal<number>=signal(1);
  isLoding:WritableSignal<boolean>=signal(false);

       // Form One
  forgetPassword:FormGroup=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
  }); msgErrorForgot:string='';
  
       // Form two
  verifyResetCode:FormGroup=new FormGroup({
    resetCode: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6}$/)]),
  }); msgErrorCode:string='';
  
      // Form three
  reset:FormGroup=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,150}$/)]),
  }); msgErrorReset:string='';


  private readonly _AuthService=inject(AuthService)
 
        // Submit Form one
_eamilSub!:Subscription;
  setVerifyEamil(){

    let myEmail=  this.forgetPassword.get('email')?.value;
    this.reset.get('email')?.patchValue(myEmail);

    this.msgErrorForgot='';
    this.isLoding.set(true);

    this._eamilSub= this._AuthService.setVerifyEamil(this.forgetPassword.value).subscribe({
      next:(res)=>{
        if(res.statusMsg=='success'){
          this.isLoding.set(false);
          this.step.set(2);
       
        }
      }
    })
  }

          // Submit Form two
  _codeSub!:Subscription;
  setVerifyCode(){

    this.isLoding.set(true);
    this.msgErrorCode='';

    this._codeSub=this._AuthService.setVerifyCode(this.verifyResetCode.value).subscribe({
      next:(res)=>{
        if(res.status=='Success'){
          this.isLoding.set(false);
          this.step.set(3);
        }}
    })
  }

          // Submit Form three
  private readonly _Router=inject(Router);
  _resetSub!:Subscription;

  setVerifyPassword(){

    this.msgErrorReset='';
    this.isLoding.set(true);

    this._resetSub= this._AuthService.setVerifyPassword(this.reset.value).subscribe({
      next:(res)=>{
        this.isLoding.set(false);
        localStorage.setItem('userToken',res.token)
        this._AuthService.saveUserData();
        this._Router.navigate(['/home'])
      }
    })
  }

  // Destroy APIs
ngOnDestroy(): void {
  this._eamilSub.unsubscribe();
  this._codeSub.unsubscribe();
  this._resetSub.unsubscribe();
}
}
  

