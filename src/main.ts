import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { Storage } from '@ionic/storage-angular';
import { register } from 'swiper/element/bundle';

register();

// Creamos el storage y lo inyectamos manualmente
const storage = new Storage();
storage.create().then((storageInstance) => {
  bootstrapApplication(AppComponent, {
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
      { provide: Storage, useValue: storageInstance }, // ✅ Aquí se soluciona
    ],
  });
});
