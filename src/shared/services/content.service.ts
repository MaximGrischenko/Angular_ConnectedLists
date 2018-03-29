import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { DataContent } from '../models/class.content';

@Injectable()
export class ContentService {

  private apiUrl = 'api/galary';
  galaryContent: DataContent[];

  constructor(private http: Http) { }

  getContent(): Observable<DataContent[]> {
    return this.http.get(this.apiUrl)
                    .map(res => res.json().data as DataContent[])
                    .map(galaryContent => this.galaryContent = galaryContent)
                    .catch(ContentService.handleError);
  }

  private static handleError(error: any) {
    console.log('An error ocured: ', error);
    return Observable.throw(error.message || error);
  }
}
