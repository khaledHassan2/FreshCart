import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, signal, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy{
    
  private readonly _FormBuilder=inject(FormBuilder)
  loginForm=this._FormBuilder.group({

    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^\w{6,150}$/)]],

  })
  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);
  msgError:WritableSignal<string>=signal('');
  msgSuccess:WritableSignal<string>=signal('');
  isLoding:WritableSignal<boolean>=signal(false);
  loginSubscrip !:Subscription;

  loginSubmit(){
    if(this.loginForm.valid){
      this.isLoding.set(true);
      this.loginSubscrip= this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next:(res)=>{
          if(res.message == 'success'){

            console.log(res)

            this.msgSuccess=res.message;
            this.isLoding.set(false);
          // 1  saveToken
            localStorage.setItem('userToken',res.token)
            // setTimeout(() => {
            // 2 jwtDecode token
            this._AuthService.saveUserData();
          // 3 navigate to home
              this._Router.navigate(['/home'])
          }
          // }, 200);
        },
        error:(err)=>{
          this.isLoding.set(false);
        }
      })

    }
  }
  ngOnDestroy(): void {
    
    this.loginSubscrip?.unsubscribe();
    
  }
 
     
}
