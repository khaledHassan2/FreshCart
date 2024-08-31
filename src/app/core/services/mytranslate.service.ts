import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MytranslateService {

  private readonly _TranslateService=inject(TranslateService);
  private readonly _Renderer2=inject(RendererFactory2).createRenderer(null,null);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);

  constructor() { 
  if (isPlatformBrowser(this._PLATFORM_ID)) {

    let savedlang = localStorage.getItem('lang');


    this._TranslateService.setDefaultLang('en');

    this._TranslateService.use(savedlang !);

    this.changeDirection();
    
  }
  }

  changeDirection():void{

    let savedlang = localStorage.getItem('lang');

    if ( savedlang === 'en' )
       {
        this._Renderer2.setAttribute(document.documentElement,'dir','ltr')
        this._Renderer2.setAttribute(document.documentElement,'lang','en')
      }
    else if( savedlang === 'ar' ) 
      {
        this._Renderer2.setAttribute(document.documentElement,'dir','rtl')
        this._Renderer2.setAttribute(document.documentElement,'lang','ar')
      }
  }

  
  changeLang(lang : string):void {
    
    this._TranslateService.use(lang);
    this.changeDirection();
 }
}
