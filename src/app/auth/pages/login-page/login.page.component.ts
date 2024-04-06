import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Avatar {
  img: string;
  seleccionado: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  type: boolean = true;
  isLogginIn: boolean = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  isLoggedIn() {
    this.isLogginIn = this.authService.isAuthenticated();
  }

  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    this.login(form.value.email, form.value.password);
  }

  login(email: string, password: string) {
    this.authService.login(email, password).subscribe({
      next: () => {
        console.log('success');
        this.router.navigateByUrl('/fitness');
      },
      error: (errorMsg) => {
        console.log({ error: errorMsg });
      },
    });
  }
}
