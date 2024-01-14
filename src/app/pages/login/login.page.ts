import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface Avatar {
  img: string;
  seleccionado: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  type: boolean = true;
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('$$$$$$$$$$$$$$$$');
    // this.isLoggedIn();
    // this.authService.getAuthStatus();
    this.authService.currentAuthStatus.subscribe(
      (authStatus) => (this.isLogin = authStatus)
    );
  }

  isLoggedIn() {
    try {
      const user = this.authService.getProfile();
      console.log(user);
      if (user != null) {
        console.log(user.displayName, 'is authenticated');
        this.isLogin = true;
        this.router.navigateByUrl('/home');
      } else {
        console.error('User not authenticated');
        this.isLogin = false;
      }
    } catch (error) {
      console.error('User not authenticated');
    }
  }

  changeType() {
    this.type = !this.type;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (!form.valid) return;
    this.login(form);
  }

  login(form: NgForm) {
    this.isLogin = true;
    this.authService
      .login(form.value.email, form.value.password)
      .then((data) => {
        this.router.navigateByUrl('/home');
        this.isLogin = false;
        form.reset();
      })
      .catch((err) => {
        console.log(err.code);
        this.isLogin = false;
      });
  }
}
