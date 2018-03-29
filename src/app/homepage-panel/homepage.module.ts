import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { homepageRouting } from './homepage.routing';
import { HomepageComponent } from './homepage.component';
import { HomepageHeaderComponent } from './components/homepage-header-component/homepage-header.component';
import { HomepageNavigateComponent } from './components/homepage-navigate-component/homepage-navigate.component';
import { HomepageIntroComponent } from './components/homepage-intro-component/homepage-intro.component';
import { HomepageContentComponent } from './components/homepage-content-component/homepage-content.component';

import { ContentService } from '../../shared/services/content.service';

@NgModule({
  declarations: [
    HomepageComponent,
    HomepageHeaderComponent,
    HomepageNavigateComponent,
    HomepageIntroComponent,
    HomepageContentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    homepageRouting
  ],
  providers: [ContentService]
})

export class HomepageModule {}
