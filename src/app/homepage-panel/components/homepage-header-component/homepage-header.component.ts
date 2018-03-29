import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../shared/services/content.service';
import { DataContent } from '../../../../shared/models/class.content';


@Component ({
  moduleId: module.id,
  selector: 'homepage-header-component',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.css']
})

export class HomepageHeaderComponent implements OnInit {

  constructor(private contentService: ContentService) {}
  galaryContent: DataContent[];

  ngOnInit() {
    this.contentService.getContent()
                       .subscribe(galaryContent => this.galaryContent = galaryContent);
  }
}
