import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const introVisto = await this.storage.get('introVisto');

    if (!introVisto) {
      // ✅ Intro NO vista → permite mostrarla
      return true;
    }

    // ✅ Intro ya vista → redirige al contenido principal directamente
    await this.router.navigateByUrl('/home', { replaceUrl: true });
    return false;
  }
}
