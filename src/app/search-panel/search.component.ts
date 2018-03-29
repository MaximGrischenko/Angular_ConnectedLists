import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  link: string;
  timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.link= 'Prev Task';
  }

  SwitchOver() {
    this.router.navigate(['/']);
  }

  LinkHover() {
    this.StartCounter();
  }

  LinkLeave() {
    this.StopCounter();
  }

  StartCounter() {
    if (this.link.length < 14) {
      this.link = '< ' + this.link + ' >';
      this.timer = setTimeout(() => this.StartCounter(), 500);
    } else {
      this.link = 'Next Task';
      this.timer = setTimeout(() => this.StartCounter(), 500);
    }
  }

  StopCounter() {
    clearTimeout(this.timer);
    this.link = 'Next Task';
  }
}
