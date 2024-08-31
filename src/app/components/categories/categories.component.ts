import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Icategorie } from '../../core/interfaces/icategorie';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit,OnDestroy{

  private readonly _CategoriesService=inject(CategoriesService);
  categoriesList:WritableSignal<Icategorie[]>=signal([]);
  
  allCategorieSub!:Subscription;
  ngOnInit(): void {
    
   this.allCategorieSub= this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.categoriesList.set(res.data);
        
      }
    })
  }

  ngOnDestroy(): void {

    this.allCategorieSub?.unsubscribe();
    
  }

}
