import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Promise<any> {
    //TODO
    //Call login API
    return new Promise((res, rej) => {
      res('Login Successful');
    });
  }

  async isAuthenticated() {
    return new Promise((res, rej) => {
      res(0);
    });
  }

  register() {}

  resetPassword() {}

  logout() {}
}
