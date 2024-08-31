import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private readonly _HttpClient:HttpClient) { }

  cartNumber:WritableSignal<number>=signal(0);
  inSidWishList:WritableSignal<string[]>=signal([]);

   

  addProductToCart(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/cart`,
      {
        "productId": id
      },
     
    )
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/cart`
    
    )
  }

  removeSpecificCartItem(id:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart/${id}`
     
    )
  }

  clearUserCart():Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}/api/v1/cart`,
      
    )
  }

  updateCartProductQuantity(id:string,cont:number):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}/api/v1/cart/${id}`,
      {
        "count": cont
      },
     
    );
  }
}
