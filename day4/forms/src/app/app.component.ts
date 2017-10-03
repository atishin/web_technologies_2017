import { Component } from '@angular/core';
import { FormControl, Validators, NgForm, FormGroup, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';

export interface Address {
    city?: string;
    country?: string;
}

export interface Person {
    name?: string;
    address?: Address;
}

export const NameValidator: ValidatorFn = (control: AbstractControl) => {
    if (control.value === 'Mark') {
        return null;
    } else {
        return {
            name: 'Invalid name'
        };
    }
};


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public name: string;

    public nameControl = new FormControl('', [NameValidator]);

    public reactiveForm = new FormGroup({
        name: new FormControl('', [NameValidator]),
        address: new FormGroup({
            city: new FormControl(''),
            country: new FormControl(''),
        })
    });

    public reactiveFormUsingFormBuilder: FormGroup;

    public person: Person = {
        name: '',
        address: {
            city: '',
            country: ''
        }
    };

    onSubmit(form: NgForm | FormGroup) {
        if (form instanceof NgForm) {
            console.log(form.value);
        } else {
            console.log(form);
        }
    }

    constructor(private fb: FormBuilder) {
        this.reactiveFormUsingFormBuilder = fb.group({
            name: fb.control(''),
            address: fb.group({
                city: fb.control(''),
                country: fb.control('')
            })
        });
    }

}
