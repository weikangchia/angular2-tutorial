import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

var webComponentsFlag = false;
document.addEventListener('WebComponentsReady', () => {
  if (!webComponentsFlag) {
    platformBrowserDynamic().bootstrapModule(AppModule);
  }
  webComponentsFlag = true;
});
if (webComponentsFlag) {
  platformBrowserDynamic().bootstrapModule(AppModule);
}
