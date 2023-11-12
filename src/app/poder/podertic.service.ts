import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoderticService {

  private apiUrl = 'http://localhost:1337';
  private tipoUsuario: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  login(correo: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/local`, {
      identifier: correo,
      password: password
    });
  }

  getInsignias() {
    return this.http.get("http://localhost:1337/insignias")
  }

  getEventos(){
    return this.http.get("http://localhost:1337/eventos")
  }

  getUsuario() {
    return this.http.get("http://localhost:1337/users");
  }

  getTipoperfil(){
    return this.http.get("http://localhost:1337/tipo-perfils")
  }

  getUser(){
    return this.http.get("http://localhost:1337/users")
  }
}
