import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  subscriptionForm: FormGroup;
  submitted = false;

  subValMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.subscriptionForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
   });
  }
  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.subscriptionForm.invalid) {
        return;
    }
    alert('SUCCESS!!');
  }


}
