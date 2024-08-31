import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';

import { Subscription } from 'rxjs';

import { CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,OnDestroy{

  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);


  clearCartSub!:Subscription;

    confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success',
        )
       this.clearCartSub= this._CartService.clearUserCart().subscribe({
              next:(res)=>{
                console.log(res);
                if(res.message =="success"){
        
                  this.UserCartList.set({} as Icart);
                  this._CartService.cartNumber.set(0);
        
                }
              }
            })
            
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
      }
      
      UserCartList:WritableSignal<Icart>=signal({} as Icart);
      
      
      getUserCartSub!:Subscription;
      
      ngOnInit(): void {

    this.getUserCartSub = this._CartService.getUserCart().subscribe({
      next:(res)=>{
        
        
        console.log(res.data);
        this.UserCartList.set(res.data);
      }
    })
  }

  removeSpecificCartSub!:Subscription;
  
  removeSpecificCart(id:string):void{
    this.removeSpecificCartSub=  this._CartService.removeSpecificCartItem(id).subscribe({
      next:(res)=>{
        console.log(res);
        
        this.UserCartList.set(res.data);
        this._CartService.cartNumber.set(res.numOfCartItems);
        this._ToastrService.success(res.status,'Remove Product')
        
      }
    })
  }
  
  updatecontSub!:Subscription;

  updatecont(id:string,cont:number):void{
   
   this.updatecontSub= this._CartService.updateCartProductQuantity(id,cont).subscribe({
      next:(res)=>{
       
        console.log(res);
        this.UserCartList.set(res.data);
        this._ToastrService.success(res.status,'Update Product')
        
      }
    })

  }


  ngOnDestroy(): void {
    this.getUserCartSub?.unsubscribe();
    this.removeSpecificCartSub?.unsubscribe();
    this.updatecontSub?.unsubscribe();
    this.clearCartSub?.unsubscribe();
  }

}
