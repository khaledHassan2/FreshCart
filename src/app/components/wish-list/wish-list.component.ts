import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';
import { IWshList } from '../../core/interfaces/iwsh-list';
import { CartService } from '../../core/services/cart.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../core/environments/environment';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit,OnDestroy{

  private readonly _WishlistService=inject(WishlistService);
  private readonly _ToastrService=inject(ToastrService);
  private readonly _CartService=inject(CartService);
  wishList:WritableSignal<IWshList[]>=signal([])

  getUserWishlistsub!:Subscription;

  ngOnInit(): void {

   this.getAllWishlist();
    
  }
  removeSpecificCartSub!:Subscription
  removeSpecificCart(id:string):void{

    this.removeSpecificCartSub= this._WishlistService.removeProductFromWishlist(id).subscribe({
      next:(res)=>{
        console.log('rem',res);
        this._ToastrService.success(res.message);
        // window.open(`${environment.localServer}/wish`,'_self');
        this.getAllWishlist();
        
        
        
      }
    })

  }
  getAllWishlist(){
    this.getUserWishlistsub= this._WishlistService.getUserWishlist().subscribe({
      next:(res)=>{
        console.log('wish',res);
        this.wishList.set(res.data);
        
      }
      
    })
  }
  addToCartSub!:Subscription;
  addToCart(id:string):void{
    
    this.addToCartSub= this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        this._ToastrService.success(res.message);
        this._CartService.cartNumber.set(res.numOfCartItems)
        
        console.log(res);
      }
    })
    
  }

  ngOnDestroy(): void {
    this.addToCartSub?.unsubscribe();
    this.removeSpecificCartSub?.unsubscribe();
    this.getUserWishlistsub?.unsubscribe();
  }


}
