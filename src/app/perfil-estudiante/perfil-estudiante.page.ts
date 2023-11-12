import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';

@Component({
  selector: 'app-perfil-estudiante',
  templateUrl: './perfil-estudiante.page.html',
  styleUrls: ['./perfil-estudiante.page.scss'],
})
export class PerfilEstudiantePage implements OnInit {

  insignias: any = [];
  tipoperfil: any = [];
  constructor(
    public poderticService: PoderticService,
  ) { }

  ngOnInit() {
    this.poderticService.getInsignias().subscribe(
      (res) => {
        this.insignias = res;
      },
      (err) => console.log(err)
    );
  
    this.poderticService.getTipoperfil().subscribe(
      (res) => {
        this.tipoperfil = res;
      },
      (err) => console.log(err)
    );  
  }
}
