import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  type: boolean = true;
  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn();
  }

  isLoggedIn() {
    try {
      const user = this.authService.getProfile();
      if (user != null) {
        console.log(user);
        console.log(user.displayName, 'is authenticated');
        this.isLogin = true;
        this.router.navigateByUrl('/home');
      } else {
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
    if (!form.valid) return;
    this.signup(form);
  }

  async signup(form: NgForm) {
    try {
      const user = await this.authService.register(
        form.value.email,
        form.value.password
      );
      if (user) {
        form.reset();
        this.router.navigateByUrl('/home');
      }
    } catch (error) {
      console.log(error);
      this.isLogin = false;
    }

    // this.isLogin = true;
    // this.authService
    //   .register(form.value.email, form.value.password)
    //   .then((data) => {
    //     console.log(data);
    //     this.router.navigateByUrl('/home');
    //     this.isLogin = false;
    //     form.reset();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.isLogin = false;
    //   });
  }
}
