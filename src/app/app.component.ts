import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private ionStorage: Storage) {}

  public finishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.checking) {
      return false;
    }
    return true;
  });

  //This effect will trigger first and then each time a signal changes
  public authStatusChangeEffect = effect(() => {
    switch (this.authService.authStatus()) {
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl(localStorage.getItem('url') || '/fitness');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
    }
  });

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.ionStorage.create();
  }
}
