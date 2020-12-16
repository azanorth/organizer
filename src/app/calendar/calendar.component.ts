import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { Week } from '../interfaces/week.interface';
import { DateService } from '../shared/date.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public calendar: Week[] = [];

  constructor(public dateService: DateService) { }

  ngOnInit(): void {
    this.dateService.date.subscribe(this.generate.bind(this));
  }

  public generate(now: Moment): void {
    console.log(now.format());
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');
    const calendar: Week[] = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {value, active, disabled, selected};
          })
      });
    }

    this.calendar = calendar;
    console.log(calendar);
  }

  public select(day: Moment): void {
    this.dateService.changeDate(day);
  }

}
