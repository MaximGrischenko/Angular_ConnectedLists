import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { searchRouting } from './search.routing';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from './search-form-component/search-form.component';
import { TemplateStringComponent } from './template-string-component/template-string.component';

import { SearchService } from '../../shared/services/search.service';

@NgModule({
  declarations: [
    SearchComponent,
    SearchFormComponent,
    TemplateStringComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    searchRouting
  ],
  providers: [SearchService]
})

export class SearchModule {}
