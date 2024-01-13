import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  login(fLogin: NgForm) {}
  register(fRegister: NgForm) {}
  // seleccionarAvatar(avatar: Avatar) {
  //   this.avatars.forEach((avatar) => (avatar.seleccionado = false));
  //   avatar.seleccionado = true;
  // }

  mostrarRegistro() {}

  mostrarLogin() {}
}
