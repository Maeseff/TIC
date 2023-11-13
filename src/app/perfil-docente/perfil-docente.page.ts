import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoderticService } from '../poder/podertic.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.page.html',
  styleUrls: ['./perfil-docente.page.scss'],
})
export class PerfilDocentePage implements OnInit {

  insignias: any = [];
  tipoperfil: any = [];
  usuarios: any[] = [];
  usuarioDocentes: any[] = [];

  insigniasUsuario = [
    { nombre: 'Insignia de Mentoría y Guía', imagen: 'https://i.ibb.co/WggL44Y/insignia-docente-1.png'},
    { nombre: 'Insignia de Inspiración', imagen: 'https://i.ibb.co/WggL44Y/insignia-docente-2.png'},
    { nombre: 'Insignia EmPodera-TIC', imagen: 'https://i.ibb.co/NyZJkyy/insignia-docente-3.png'}
  ];

  constructor(private router: Router,
    public poderticService: PoderticService,
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
