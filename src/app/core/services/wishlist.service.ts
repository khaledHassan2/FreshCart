import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private readonly _HttpClient:HttpClient) { }

  addWishList(id:string):Observable<any>{
   return this._HttpClient.post(`${environment.baseUrl}/api/v1/wishlist`,
    {
      productId: id
    })
  }

  getUserWishlist():Observable<any>{
   return this._HttpClient.get(`${environment.baseUrl}/api/v1/wishlist`)
  }
  removeProductFromWishlist(id:string):Observable<any>{
   return this._HttpClient.delete(`${environment.baseUrl}/api/v1/wishlist/${id}`)
  }


}
