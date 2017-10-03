import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(value: moment.Moment, args: string): any {
    if (value) {
        return value.format(args);
    } else {
        return 'Date not selected';
    }
  }

}
