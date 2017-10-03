import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameValidatorDirective } from './name-validator.directive';
import { ObservablesComponent } from './observables/observables.component';
import { FormatPipe } from './format.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NameValidatorDirective,
        ObservablesComponent,
        FormatPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
