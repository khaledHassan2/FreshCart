import { Subscription } from 'rxjs';
import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { IOrder } from '../../core/interfaces/iorder';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css'
})
export class AllOrdersComponent implements OnInit,OnDestroy{

  private readonly _OrderService=inject(OrderService);
  private readonly _AuthService=inject(AuthService);


  ordersList:WritableSignal<IOrder[]>=signal([]);


  getUserOrdersSub!:Subscription;
  ngOnInit(): void {
    this._AuthService.saveUserData();
    console.log(this._AuthService.userData);
    
    
   this.getUserOrdersSub= this._OrderService.getUserOrders(this._AuthService.userData.id).subscribe({
      next:(res)=>{
       
        this.ordersList.set(res);
        // console.log('orderslist',this.ordersList);
        
      }
    })
  }

  ngOnDestroy(): void {
    this.getUserOrdersSub?.unsubscribe();
  }


}
