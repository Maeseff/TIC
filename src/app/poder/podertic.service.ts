import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PoderticService {

  constructor(
    private http: HttpClient
  ) { }

  
  getEstudiante(){
    return this.http.get("http://localhost:1337/usuarios")
  }

  getInsignias() {
    return this.http.get("http://localhost:1337/insignias")
  }

  getEventos(){
    return this.http.get("http://localhost:1337/eventos")
  }
}
