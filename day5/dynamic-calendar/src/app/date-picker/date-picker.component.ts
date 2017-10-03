import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from '../calendar.service';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

    public date1: moment.Moment = moment();
    public date2: moment.Moment;

    constructor(private calendar: CalendarService) { }

    ngOnInit() {
    }

    selectDate(model: 'date1' | 'date2') {
        if (this.calendar.selectedDate) {
            if (model === 'date1') {
                this.date1 = this.calendar.selectedDate.clone();
            }
            if (model === 'date2') {
                this.date2 = this.calendar.selectedDate.clone();
            }
        } else {
            if (model === 'date1') {
                this.date1 = null;
            }
            if (model === 'date2') {
                this.date2 = null;
            }
        }
    }

}
