import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  type: boolean = true;
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.signup(form.value.email, form.value.password);
  }

  signup(email: string, password: string) {
    this.authService.register(email, password).subscribe({
      next: () => {
        console.log('success user created');
        this.router.navigateByUrl('/fitness');
      },
      error: (errorMsg) => {
        console.log({ error: errorMsg });
      },
    });
  }
}
