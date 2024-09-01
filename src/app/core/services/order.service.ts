import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly _HttpClient:HttpClient) { }
  

  Checkout(idCart:string|null,data:object):Observable<any>{
    if (typeof window!='undefined') {
      
      return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${idCart}?url=${window.location.origin}`,
        {
          "shippingAddress":data
        },
        
      )
    }else{

      return this._HttpClient.get('');
    }
  }
 CashOrder(idCart:string|null,data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/${idCart}`,
      {
        "shippingAddress":data
      },
      
    )
  }

  getUserOrders(idUser:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/user/${idUser}`)
  }
}
