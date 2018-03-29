import {PartString} from '../models/class.template-string';
import {TemplateString} from '../models/data.template-string';


export class SearchService {

  templateString: PartString[] = TemplateString;
  message: string = '';
  partExists: boolean = false;

  searchData(searchString) {
    this.message = '';
    this.partExists = false;

    for ( let i = 0; i < this.templateString.length; i++ ) {
      if (this.templateString[i].title === searchString) {
        this.templateString[i].finded = true;
        this.partExists = true;
      }
    }

    if (!this.partExists) {
      this.message = 'This template string does\'t contain the ' + searchString;
    }

    return this.message;
  }

  getTemplate(): PartString[] {
    return this.templateString;
  }
}
