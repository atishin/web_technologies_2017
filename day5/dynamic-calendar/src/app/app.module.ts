import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateTransformPipe } from './date-transform.pipe';
import { CalendarService } from './calendar.service';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        CalendarMonthComponent,
        DatePickerComponent,
        DateTransformPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [CalendarService],
    entryComponents: [
        CalendarMonthComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
