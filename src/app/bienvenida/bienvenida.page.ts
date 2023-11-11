import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {
  services = [
    {
      icon: 'medal-outline',
      title: 'Insignias',
      description: 'Descubre nuestras insignias de reconocimiento.',
    },
    {
      icon: 'receipt-outline',
      title: 'Certificados',
      description: 'Colecciona insignias y obtén un certificado.',
    },
    {
      icon: 'logo-linkedin',
      title: 'LinkedIn',
      description: 'Añade tus insignias a LinkedIn.',
    },
    {
      icon: 'calendar',
      title: 'Actividades',
      description: 'Inscribete a los eventos del programa Más Mujeres en las TICs.',
    },
    {
      icon: 'download',
      title: 'CV',
      description: 'Descarga tú Certificado para tu Curriculum.',
    },
    {
      icon: 'book',
      title: 'Historial de eventos',
      description: 'Mira eventos pasados en nuestro registro de historial.',
    },
  ];

  constructor(private router: Router) {}

  evento(){
    this.router.navigate(['evento']);
  }

  programa(){
    this.router.navigate(['programa']);
  }
}
