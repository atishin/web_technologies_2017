import { Directive, ClassProvider } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appNameValidator]',
    providers: [<ClassProvider>{
        provide: NG_VALIDATORS,
        useClass: NameValidatorDirective,
        multi: true
    }]
})
export class NameValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any; } {
        if (control.value === 'Mark') {
            return null;
        } else {
            return {
                name: 'Invalid name'
            };
        }
    }

    registerOnValidatorChange?(fn: () => void): void {

    }

    constructor() { }

}
