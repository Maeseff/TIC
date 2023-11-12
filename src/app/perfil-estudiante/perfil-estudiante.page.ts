import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  insignias: any = []
  tipoperfil: any = []
  userData: any;

  constructor(
    public poderticService: PoderticService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      // Convertir la cadena JSON a un objeto
      const usuarioRecuperado = JSON.parse(usuarioString);
    
      // Determinar el tipo de usuario basado en el dominio del correo electrónico
      if (usuarioRecuperado.correo.endsWith('@duocuc.cl')) {
        usuarioRecuperado.tipoUsuario = 'Estudiante y/o Titulado';
      } else if (usuarioRecuperado.correo.endsWith('@duoc.cl')) {
        usuarioRecuperado.tipoUsuario = 'Administrativo';
      } else if (usuarioRecuperado.correo.endsWith('@profesor.duoc.cl')) {
        usuarioRecuperado.tipoUsuario = 'Docente Duoc UC';
      }else{
        console.log('correo no valido');
      }
    
      // Almacenar el objeto actualizado de usuario en el localStorage
      localStorage.setItem('usuario', JSON.stringify(usuarioRecuperado));
    
      // Asignar el usuario a una propiedad en tu componente
      this.userData = usuarioRecuperado;
    } else {
      console.error('No se encontraron datos de usuario en el localStorage.');
    };
    this.poderticService.getInsignias().subscribe(
      (res) => {
        this.insignias = res;
      },
      (err) => console.log(err)
    )
    }
  }