import { Usuario } from '../../models/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: Usuario;

  constructor() {
    this.user = {};
  }

  ngOnInit() {
  }

  registro() {
    console.log(this.user);
  }

  formatDate(fecha: any) {
    this.user.fechaNacimiento = fecha;
  }

}
