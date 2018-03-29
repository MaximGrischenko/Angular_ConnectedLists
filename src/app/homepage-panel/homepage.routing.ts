import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage.component';

const homepageRoutes: Routes = [{
  path: '',
  component: HomepageComponent
}];

export const homepageRouting: ModuleWithProviders = RouterModule.forChild(homepageRoutes);
