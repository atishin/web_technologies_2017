import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from '../calendar.service';
import * as _ from 'lodash';
import { CalendarMonthComponent } from '../calendar-month/calendar-month.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

    @ViewChild('monthes', { read: ViewContainerRef })
    private monthesContainer: ViewContainerRef;

    public selectedYear: number;
    public years: number[];

    public selectedDate: moment.Moment;

    constructor(
        private cfr: ComponentFactoryResolver,
        private calendar: CalendarService
    ) { }

    ngOnInit() {
        this.calendar.selectedDate = moment();
        this.years = _.range(2015, 2019);
    }

    public onDateSelected(date: moment.Moment) {
        this.selectedDate = date;
        this.calendar.selectedDate = date;
    }

    selectYear(year) {
        this.selectedYear = year;
        this.renderMonthes();
    }

    private renderMonthes() {
        this.monthesContainer.clear();

        if (!this.selectedYear) {
            return;
        }

        console.log('started rendering');

        const factory = this.cfr.resolveComponentFactory(CalendarMonthComponent);
        for (let i = 0; i < 12; i++) {
            const componentRef = this.monthesContainer.createComponent(factory);
            componentRef.instance.firstDate = moment(new Date(this.selectedYear, i));
            componentRef.instance.onDateSelected.subscribe((date) => {
                this.onDateSelected(date);
            });
        }

        console.log('stopped rendering');


    }

}
