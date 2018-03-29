import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/homepage-panel/homepage.module#HomepageModule'
  },
  {
    path: 'search-app',
    loadChildren: 'app/search-panel/search.module#SearchModule'
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
