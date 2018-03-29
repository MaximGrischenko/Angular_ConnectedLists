import {Component} from '@angular/core';
import {SearchService} from '../../../shared/services/search.service';

@Component({
  moduleId: module.id,
  selector: 'search-form-component',
  templateUrl: 'search-form.component.html',
  styleUrls: ['search-form.component.css']
})

export class SearchFormComponent {

  searchStr: string = '';
  message: string = '';

  constructor(private searchService: SearchService) {
  }

  onSubmit() {
    this.message = this.searchService.searchData(this.searchStr);
  }
}
