import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class CalendarService {

    public selectedDate: moment.Moment;

    constructor() { }

}
