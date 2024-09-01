import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../core/services/order.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CartService } from '../../core/services/cart.service';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule,TranslateModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit ,OnDestroy{

  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _Router=inject(Router);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _OrderService=inject(OrderService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _CartService=inject(CartService);
  idCart:string|null='';

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.idCart=res.get('id')
      }
    })
  }

  order:FormGroup=this._FormBuilder.group({
    details: [null,[Validators.required]],
    phone: [null,[Validators.required]],
    city: [null,[Validators.required]]
  })

  CheckoutSub!:Subscription;
  orderSubmit():void{
    
   this.CheckoutSub= this._OrderService.Checkout(this.idCart,this.order.value).subscribe({
      next:(res)=>{
        console.log(res);
        window.open( res.session.url,'_self')
        this._ToastrService.success('success')
      }
    })
  }
  CashOrderSub!:Subscription;
  cashOrderUser():void{
    this.CashOrderSub=this._OrderService.CashOrder(this.idCart,this.order.value).subscribe({
      next:(res)=>{
        console.log('cach',res);
        this._Router.navigate(['/allorders']);
        this._CartService.cartNumber.set(0);
        
      }
    })
  }

  ngOnDestroy(): void {

    this.CashOrderSub?.unsubscribe();
    this.CheckoutSub?.unsubscribe();
    
  }

  

}
