import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
  name: 'moment',
  pure: false
})
export class MomentPipe implements PipeTransform {
  public transform(m: Moment | null, format: string = 'MMMM YYYY'): string | null {
    return m && m.format(format);
  }
}
