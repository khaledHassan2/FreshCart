import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { TranslateCompiler, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.css'
})
export class NavAuthComponent {

  private readonly _MytranslateService=inject(MytranslateService)

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

}
