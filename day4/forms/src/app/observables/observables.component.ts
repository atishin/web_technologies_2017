import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { Observer, Subject } from 'rxjs';

@Component({
    selector: 'app-observables',
    templateUrl: './observables.component.html',
    styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

    public interval$ = Observable
        .interval(1000)
        // .filter(value => value % 2 === 0)
        .throttleTime(2000)
        .map(value => `Number: ${value}`);

    public subject = new Subject<number>();
    public newObs: Observable<number> = this.subject.asObservable().throttleTime(2000);

    public subscription = this.interval$.subscribe(
        value => {
            this.intervalValue = value;
        }
    );

    public intervalValue;

    constructor() { }

    ngOnInit() {
        console.log(this.newObs);
        this.newObs.subscribe(value => {
            console.log(value);
        }, error => {
            console.log(error);
        }, () => {
            console.log('Completed');
        });

        let counter = 0;
        setInterval(() => {
            counter ++;
            this.subject.next(counter);
        }, 1000);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
