import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { Moment } from 'moment';


@Injectable({
  providedIn: 'root'
})
export class DateService {
  public date: BehaviorSubject<Moment> = new BehaviorSubject(moment());

  public changeMonth(dir: number): void {
    const value = this.date.value.add(dir, 'month');
    this.date.next(value);
  }

  public changeDate(date: Moment): void {
    const value = this.date.value.set({
      date: date.date(),
      month: date.month()
    });
    this.date.next(value);
  }
}
