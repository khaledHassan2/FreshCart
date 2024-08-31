import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { headersInterceptor } from './core/intersptors/headers.interceptor';
import { errorsInterceptor } from './core/intersptors/errors.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { lodingInterceptor } from './core/intersptors/loding.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withViewTransitions(),withInMemoryScrolling({scrollPositionRestoration:'top'})), provideClientHydration(),
    provideHttpClient(withFetch(),withInterceptors([headersInterceptor,errorsInterceptor,lodingInterceptor])),
    provideAnimations(),
    provideToastr(),
    importProvidersFrom(
      NgxSpinnerModule,
      TranslateModule.forRoot({
        defaultLanguage:'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })

    ),
  ]
};
