import { Component, computed, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { Icategorie } from '../../core/interfaces/icategorie';
import { CategoriesService } from '../../core/services/categories.service';
import { SearshPipePipe } from '../../core/pipes/searsh-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { WishlistService } from '../../core/services/wishlist.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CarouselModule,SearshPipePipe,FormsModule,TranslateModule,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,OnDestroy{

  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:3000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: true,
    rtl:true,
  }
  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl:true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1024: {
        items: 6
      }
    },

    nav: true
  }
  
  private readonly _ProductsService=inject(ProductsService);
  private readonly _CategoriesService=inject(CategoriesService);
  private readonly _CartService=inject(CartService);
  private readonly _WishlistService=inject(WishlistService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _NgxSpinnerService=inject(NgxSpinnerService);


  productList:WritableSignal<Iproduct[]>=signal([]);
  // wishID:WritableSignal<any[]>=signal([]);
  categorietList:WritableSignal<Icategorie[]>=signal([]);
  productSupscrip !:Subscription;

  getAllCategoriesSub !:Subscription;
  getUserWishlistSub !:Subscription;

  textSearsh:WritableSignal<string>=signal('');


  
 
 
  ngOnInit(): void {
    this._NgxSpinnerService.show();
    this.productSupscrip = this._ProductsService.getAllProduct().subscribe({

      next:(res)=>{
        this._NgxSpinnerService.hide();

        this.productList.set(res.data);
        // console.log(res.data)
      }
      
    })
   this.getAllCategoriesSub= this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res.data)
        this.categorietList.set(res.data)

      }
    })
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
    
    this.addProductToCartSub= this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)

        this._CartService.cartNumber.set(res.numOfCartItems);
        
        console.log(res);
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
        this._ToastrService.success(res.status)
        this._CartService.inSidWishList.set(res.data)
      }
    })
  }






  ngOnDestroy(): void {
      this.productSupscrip?.unsubscribe();
      this.getAllCategoriesSub?.unsubscribe();
      this.addProductToCartSub?.unsubscribe();
      this.addWishListsub?.unsubscribe();
      this.getUserWishlistSub?.unsubscribe();
  }
  
}


