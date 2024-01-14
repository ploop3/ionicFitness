import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const emailReset = form.value.email;
  }
}
