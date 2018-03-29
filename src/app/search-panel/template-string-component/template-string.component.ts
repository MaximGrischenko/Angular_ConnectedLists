import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../shared/services/search.service';
import { PartString } from '../../../shared/models/class.template-string';

@Component({
  moduleId: module.id,
  selector: 'template-string-component',
  templateUrl: 'template-string.component.html',
  styleUrls: ['template-string.component.css']
})

export class TemplateStringComponent implements OnInit{

  templateString: PartString[];

  constructor(private searchService: SearchService) {
    this.templateString = [];
  }

  ngOnInit () {

    this.templateString = this.searchService.getTemplate();
  }
}
