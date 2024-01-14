import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  sendPasswordResetEmail,
  signOut,
} from '@angular/fire/auth';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {
    this.authStatusListener();
  }

  currentUser: any = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();

  authStatusListener() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);
        this.authStatusSub.next(user);
        console.log('User is logged in');
      } else {
        this.authStatusSub.next(null);
        console.log('User is logged out');
      }
    });
  }

  async login(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);

    // return new Promise((res, rej) => {
    //   res('Login Successful');
    // });
  }

  async isAuthenticated() {
    return new Promise((res, rej) => {
      res(0);
    });
  }

  async register(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async resetPassword(email: string): Promise<void> {
    return await sendPasswordResetEmail(this.auth, email);
  }

  logout() {
    signOut(this.auth)
      .then(() => {
        //Signout successful
      })
      .catch((err) => {
        //An error happened
      });
  }

  getProfile() {
    //Can be null
    console.log('Current USER IS %%%%%%%%%%%', this.auth.currentUser);
    return this.auth.currentUser;
  }
}
