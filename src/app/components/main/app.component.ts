import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FileValidators } from '../../validators/file-validators';
import 'rxjs/add/operator/map' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  formDoc: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.formDoc = this.fb.group({
      basicfile: [],
      requiredfile: [{ value: undefined, disabled: false }, [Validators.required, FileValidators.maxContentSize(104857600)]]
    });
  }

  onSubmit() {
    console.log('SUBMITTED', this.formDoc);
  }

}
