import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { FileInput } from '../models/file-input.model';

export class FileValidators {

    /**
     * Function to control content of files
     *
     * @param control
     *
     * @returns
     */
    static maxContentSize(bytes: number): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            // console.log(typeof control, control);
            const size = control && control.value ? (control.value as FileInput).files.map(f => f.size).reduce((acc, i) => acc + i, 0) : 0;
            console.log('De size ' + size);
            const condition = bytes > size;
            return condition ? null : {
                maxContentSize: {
                    actualSize: size,
                    maxSize: bytes
                }
            };
        };
    }

    static textExtension() {
        const text = 'Hallo';
        return text;
    }
}
