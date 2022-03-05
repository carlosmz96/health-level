import { Usuario } from './../../models/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = {
      nombre: '',
      apellidos: '',
      fechaNacimiento: undefined
    };
  }

  ngOnInit() {
  }

  registro() {
    console.log(this.usuario);
  }

}
