import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  async getUsuarios() {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return await this.http.get(this.api + '/users', { headers });
  }

}
