import { Component, inject, OnDestroy, signal, WritableSignal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnDestroy,OnDestroy{

  private readonly _FormBuilder=inject(FormBuilder);

  registerForm:FormGroup=this._FormBuilder.group({
    name: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)] ],
    email:[null, [Validators.required,Validators.email] ],
    phone:[null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)] ],
    password:  [null, [Validators.required,Validators.pattern(/^\w{6,50}$/)] ],
    rePassword:[null, ],

  },{validators:this.confirmpassword})

  private readonly _AuthService=inject(AuthService);
  private readonly _Router=inject(Router);

  msgError:WritableSignal<string>=signal('');
  msgSucsses:WritableSignal<string>=signal('');
  isLoding:WritableSignal<boolean>=signal(false);
  
  registerSubscrip !:Subscription;

  registerSubmit(){
    
    if(this.registerForm.valid){

      this.isLoding.set(true);
      this.msgError.set('');
      this.msgSucsses.set('');

      this.registerSubscrip= this._AuthService.setRegisterForm(this.registerForm.value).subscribe({

        next:(res)=>{
     
          this.isLoding.set(false);
          this.msgSucsses=res.message;
          if(res.message=='success'){
            setTimeout(()=>{

              this._Router.navigate(['/login'])
            },200)

          }
          console.log(this.registerForm)

        },
        error:(err:HttpErrorResponse)=>{
          this.isLoding.set(false);
        }

      })
      
    }
    else{
      this.registerForm.markAllAsTouched();
      this.registerForm.setErrors({mismach:true})
    }

  }
  ngOnDestroy(): void {
    this.registerSubscrip?.unsubscribe();
  }

  confirmpassword(g:AbstractControl){

    return g.get('password')?.value === g.get('rePassword')?.value?null:{"mismach":true}

  }

}
