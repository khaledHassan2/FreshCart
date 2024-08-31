import { Component, computed, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { CartService } from '../../core/services/cart.service';
import { single, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.css'
})
export class NavBlankComponent implements OnInit,OnDestroy{

  readonly _AuthService=inject(AuthService);
  readonly _CartService=inject(CartService);
  readonly _TranslateModule=inject(TranslateModule);
  readonly _MytranslateService=inject(MytranslateService);

  change():void{
    if (localStorage.getItem('lang')=='en') {
      localStorage.setItem('lang','ar');
      this._MytranslateService.changeLang('ar');
    }
    else if(localStorage.getItem('lang')=='ar'){
      localStorage.setItem('lang','en');
      this._MytranslateService.changeLang('en');
    }
  }

   navCountProduct=computed(()=>this._CartService.cartNumber());

   getUserCartSub!:Subscription;

  ngOnInit(): void {

    this.getUserCartSub=this._CartService.getUserCart().subscribe({
      next:(res)=>{
        this._CartService.cartNumber.set(res.numOfCartItems)
      }
    })
  }

  ngOnDestroy(): void {
    this.getUserCartSub?.unsubscribe();
  }

}
