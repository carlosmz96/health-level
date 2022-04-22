import { Usuario } from '../../models/Usuario';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public users: Usuario[] = [];

  constructor(
    private userService: UserService
  ) {
    this.users = [];
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  async obtenerUsuarios() {
    (await this.userService.getUsuarios()).subscribe(
      {
        next: data => {
          this.users = (data as any).users as Usuario[];
          console.log(this.users);
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }

}
