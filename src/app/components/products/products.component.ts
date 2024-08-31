import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../core/interfaces/iproduct';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { SearshPipePipe } from '../../core/pipes/searsh-pipe.pipe';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,SearshPipePipe,RouterLink,TranslateModule,NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit,OnDestroy{

  private readonly _ProductsService=inject(ProductsService);
  private readonly _CartService=inject(CartService);
  private readonly _WishlistService=inject(WishlistService);
  private readonly _ToastrService=inject(ToastrService);
  productSupscrip!:Subscription;
  getUserWishlistSub!:Subscription;
  productList:WritableSignal<Iproduct[]>=signal([]);
  textSearsh:WritableSignal<string>=signal('');
  isLoding:WritableSignal<boolean>=signal(false);

  ngOnInit(): void {
    this.productSupscrip = this._ProductsService.getAllProduct().subscribe({
      next:(res)=>{
        this.productList.set(res.data);
        // console.log(res.data)
      }
      
    })
    // 
    this.getUserWishlistSub= this._WishlistService.getUserWishlist().subscribe({
      next:(res)=>{
        let arr:WritableSignal<string[]>=signal([]);
        res.data.forEach((_element: any) => {
          arr.update((v)=>v+_element._id)
          
        });
        this._CartService.inSidWishList.set(arr());
       
        
        
      }
    })
    
  }
  addProductToCartSub!:Subscription;
  addToCart(id:string):void{
    this.isLoding.set(true);
    
    this.addProductToCartSub= this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.isLoding.set(false);
        console.log(res);
        this._CartService.cartNumber.set(res.numOfCartItems)
      }
    })
    
  }
  addWishListsub!:Subscription;
  isProductInWishlist(productId: string): boolean {
    return this._CartService.inSidWishList().includes(productId);
  }
  addWishList(id:string):void{
    this.addWishListsub=this._WishlistService.addWishList(id).subscribe({
      next:(res)=>{
        console.log('wish',res);
        this._ToastrService.success(res.status);
        this._CartService.inSidWishList.set(res.data);
      }
    })

  }
  ngOnDestroy(): void {
    this.addWishListsub?.unsubscribe();
    this.addProductToCartSub?.unsubscribe();
    this.productSupscrip?.unsubscribe();
  }

}
