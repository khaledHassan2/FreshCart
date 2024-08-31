import { Component, inject, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { Iproduct } from '../../core/interfaces/iproduct';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule,TranslateModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit,OnDestroy{

  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _ProductsService=inject(ProductsService);
  private readonly _CartService=inject(CartService);
  private readonly _ToastrService=inject(ToastrService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:2500,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    rtl:true,
    items:1,
    nav: true
  }
  
  detailsProduct:WritableSignal<Iproduct>=signal({} as Iproduct);
  parmaMapIdSub !:Subscription;
  specificProductSub !:Subscription;


  ngOnInit(): void {
   this.parmaMapIdSub= this._ActivatedRoute.paramMap.subscribe({
      next:(prm)=>{
        
        const productId:string|null=prm.get('id');
        // call api
            this.specificProductSub=this._ProductsService.getSpecificProduct(productId).subscribe({
              next:(res)=>{
                console.log('pro',res)
                this.detailsProduct.set(res.data);
              }
            })
      }
    })
  }
  isLoding:WritableSignal<boolean>=signal(false);
  addProductToCartSub!:Subscription;
  addToCart(id:string):void{
    this.isLoding.set(true);
    
    this.addProductToCartSub= this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message)
        this.isLoding.set(false);
        this._CartService.cartNumber.set(res.numOfCartItems)
        
        console.log(res);
      },
      error:(err)=>{
        this.isLoding.set(false);

      }
    })
    
  }
  ngOnDestroy(): void {
    
    this.parmaMapIdSub?.unsubscribe();
    this.specificProductSub?.unsubscribe();

  }

}
