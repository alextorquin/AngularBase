import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  @Output() public save = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.form = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }
  public onSubmit = () => this.save.next(this.form.value);
}
