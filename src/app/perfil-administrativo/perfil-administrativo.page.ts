import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-administrativo',
  templateUrl: './perfil-administrativo.page.html',
  styleUrls: ['./perfil-administrativo.page.scss'],
})
export class PerfilAdministrativoPage implements OnInit {

  insignias: any = [];
  tipoperfil: any = [];
  usuarios: any[] = [];
  usuarioDocentes: any[] = [];

  insigniasUsuario = [
    { nombre: 'Insignia de Colaboración', imagen: 'https://i.ibb.co/mN0RvQ4/Insignia-Colaborador-1.png'},
    { nombre: 'Insignia de Impacto', imagen: 'https://i.ibb.co/Tthgxwn/Insignia-Colaborador-2.png'},
    { nombre: 'Insignia EmPodera-TIC', imagen: 'https://i.ibb.co/fF914FC/Insignia-Colaborador-3.png'}
  ];

  constructor(
    public poderticService: PoderticService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.poderticService.getInsignias().subscribe({
      next: (res) => {
        this.insignias = res;
      },
      error: (err) => console.log(err)
    });
  
    this.poderticService.getTipoperfil().subscribe(data => {
      this.tipoperfil = data;
    }, err => {
      console.log(err);
    });

    this.poderticService.getUsuario().subscribe((data: any) => {
      this.usuarios = Array.isArray(data) ? data : [];
      this.usuarioDocentes = this.usuarios.filter(usuario => usuario.tipo_perfil === 'Docente');
    }, (err: any) => {
      console.log(err);
    });
    
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
