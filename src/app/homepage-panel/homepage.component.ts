import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  link: string;
  timer: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.link= 'Next Task';
  }

  SwitchOver() {
    this.router.navigate(['search-app']);
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
