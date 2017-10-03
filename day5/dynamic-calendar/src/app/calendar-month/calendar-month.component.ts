import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-calendar-month',
    templateUrl: './calendar-month.component.html',
    styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {



    private _firstDate: moment.Moment;
    public get firstDate(): moment.Moment {
        return this._firstDate;
    }
    public set firstDate(v: moment.Moment) {
        this._firstDate = v;
        this.createMonth();
    }

    private subject = new Subject<moment.Moment>();
    public onDateSelected = this.subject.asObservable();


    public monthTitle: string;
    public weeks;


    constructor() { }

    ngOnInit() {
    }

    private createMonth() {
        this.monthTitle = this.firstDate.format('MMMM');
    }

    selectDate() {
        this.subject.next(this.firstDate);
    }

}
