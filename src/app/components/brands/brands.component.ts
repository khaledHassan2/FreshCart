import { Subscription } from 'rxjs';
import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { IBrand } from '../../core/interfaces/ibrand';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit,OnDestroy{

  private readonly _BrandsService=inject(BrandsService);
  brandsList:WritableSignal<IBrand[]>=signal([]);

  getAllBrandsSub!:Subscription;

  ngOnInit(): void {
   this.getAllBrandsSub= this._BrandsService.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.brandsList.set(res.data);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  getBrandSub!:Subscription;
  getBrand(id:string):void{
   this.getBrandSub= this._BrandsService.getSpecificBrand(id).subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }

  ngOnDestroy(): void {

    this.getBrandSub?.unsubscribe();
    this.getAllBrandsSub?.unsubscribe();
    
  }



}
