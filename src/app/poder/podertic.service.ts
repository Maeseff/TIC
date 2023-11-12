import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PoderticService {

  private authenticated = false;
  private currentUser: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  getInsignias() {
    return this.http.get("http://localhost:1337/insignias")
  }

  getEventos(){
    return this.http.get("http://localhost:1337/eventos")
  }

  getUsuario(){
    return this.http.get("http://localhost:1337/usuarios")
  }

  getTipoperfil(){
    return this.http.get("http://localhost:1337/tipo-perfils")
  }

    // Simula una base de datos local para almacenar credenciales de usuario
  private users = [
      { email: 'ta.melo@duocuc.cl', password: 'Student2023', firstName: 'Tabita', lastName: 'Melo', secondLastName: 'Vera', profileType: 'Estudiante'},
      { email: 'ig.selman@duoc.cl', password: 'nacho123', firtsNmae: 'Ignacio', lastName: 'Selman', secondLastName: 'Caro', profileType: 'Colaborador Administrativo'},
      // Agrega más usuarios según tus necesidades
  ];
}
