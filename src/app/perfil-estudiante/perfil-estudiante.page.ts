import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  insignias: any = [];
  tipoperfil: any = [];
  usuarios: any[] = [];
  usuarioDocentes: any[] = [];
  insiUsuario: any[] = [];

  insigniasUsuario = [
    { nombre: 'Insignia de Colaboración', imagen: 'https://i.ibb.co/SnHKy07/Insignia1-Estudiante.png', descripcion: 'Participar activamente en al menos 1 taller o evento de liderazgo femenino'},
    { nombre: 'Insignia de Inspiración', imagen: 'https://i.ibb.co/gZVqttg/Insignia2-Estudiante.png', descripcion: 'Participar activamente en al menos 1 taller o evento de liderazgo femenino' },
    { nombre: 'Insignia EmPodera-TIC', imagen: 'https://i.ibb.co/pdn9YCT/Insignia3-Estudiante.png', descripcion: 'Participar activamente en al menos 1 taller o evento de liderazgo femenino'}
  ];

  constructor(
    public poderticService: PoderticService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.poderticService.getTipoperfil().subscribe((data: any) => {
      this.tipoperfil = data.filter((tipoperfl: any) => tipoperfl.tipo_perfil === 'Estudiante y/o Titulado');
    }, (err: any) => {
      console.log(err);
    });
    

    this.poderticService.getUsuario().subscribe((data: any) => {
      this.usuarios = Array.isArray(data) ? data : [];
      this.usuarioDocentes = this.usuarios.filter(usuario => usuario.tipo_perfil === 'Docente');
    }, (err: any) => {
      console.log(err);
    });

    this.poderticService.getInsignias().subscribe(
      (res) => {
        this.insignias = res;
      },
      (err) => console.log(err)
    )
  }

  evento(){
    this.router.navigate(['evento']);
  }

  programa(){
    this.router.navigate(['programa']);
  }

  cerrarSesion(){
    this.router.navigate(['bienvenida'])
  }
}
