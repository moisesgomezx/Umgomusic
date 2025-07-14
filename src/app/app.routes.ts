import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { IntroGuard } from './guards/intro.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
    canActivate: [IntroGuard],
  }
];
