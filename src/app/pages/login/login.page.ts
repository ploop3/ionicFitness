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

  ngOnInit() {}

  isLoggedIn() {
    //if loggedIn
    //Navigate to Home
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
        console.log(data);
        this.router.navigateByUrl('/home');
        this.isLogin = false;
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        this.isLogin = false;
      });
  }
}
