import { Injectable, OnDestroy, computed, inject, signal } from '@angular/core';
import {
  Auth,
  User,
  UserCredential,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
  user,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  authState,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {
  Observable,
  Subscription,
  catchError,
  from,
  map,
  of,
  throwError,
} from 'rxjs';
import { AuthStatus } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //Expose these computed properties, no way to overwrite them outside the service
  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  constructor() {
    this.authStateSubscription = this.authState$.subscribe({
      next: (aUser: User | null) => {
        if (aUser != null) {
          console.log('success auth detection');
          console.log(aUser);
          this.setAuthentication(aUser, aUser.uid);
          console.log(this.authStatus());
        } else {
          console.log('Not user authenticated');
          console.log(this.authStatus());
          this._authStatus.set(AuthStatus.notAuthenticated);
        }
      },
      error: (errorMsg) => {
        console.log({ error: errorMsg });
        this._authStatus.set(AuthStatus.notAuthenticated);
      },
    });
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    return true;
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      map((response) => {
        // console.log(response.user);
        this.setAuthentication(response.user, response.user.uid);
      }),

      catchError((err) => {
        return throwError(() => err.message);
      })
    );
  }

  isAuthenticated(): boolean {
    // return this.currentUser ? true : false;
    return true;
  }

  register(email: string, password: string): Observable<any> {
    let userCredential = null;
    // try {
    //   userCredential = await createUserWithEmailAndPassword(
    //     this.auth,
    //     email,
    //     password
    //   );
    // } catch (err) {
    //   this.failedSignIn = true;
    // }
    // return userCredential!;

    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    ).pipe(
      map((response) => {
        // console.log(response.user);
        this.setAuthentication(response.user, response.user.uid);
      }),

      catchError((err) => {
        return throwError(() => err.message);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    return await sendPasswordResetEmail(this.auth, email);
  }

  logout() {
    // from(signOut(this.auth)).pipe(
    //   map((resp) => {
    //     this._currentUser.set(null);
    //     this._authStatus.set(AuthStatus.notAuthenticated);
    //   })
    // );

    signOut(this.auth)
      .then(() => {
        //Signout successful
        console.log('Signout successful');
        this._currentUser.set(null);
        this._authStatus.set(AuthStatus.notAuthenticated);
      })
      .catch((err) => {
        //An error happened
      });
  }

  getProfile() {
    //Can be null
    return this.currentUser;
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.authStateSubscription.unsubscribe();
  }
}
