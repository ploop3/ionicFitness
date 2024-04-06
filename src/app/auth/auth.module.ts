import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageComponent } from './pages/login-page/login.page.component';
import { ResetPasswordPageComponent } from './pages/reset-password/reset-password-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, FormsModule, IonicModule],
})
export class AuthModule {}
