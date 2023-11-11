import { Component } from '@angular/core';

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
      description: 'Descubre nuestras insignias.',
    },
    {
      icon: 'receipt-outline',
      title: 'Certificados',
      description: 'Colecciona insignias.',
    },
    {
      icon: 'logo-linkedin',
      title: 'LinkedIn',
      description: 'Añade tus insignias a LinkedIn.',
    },
    {
      icon: 'calendar',
      title: 'Actividades',
      description: 'Inscríbete en los eventos.',
    },
    {
      icon: 'download',
      title: 'CV',
      description: 'Descarga tu Certificado.',
    },
    {
      icon: 'book',
      title: 'Historial de eventos',
      description: 'Mira eventos pasados.',
    },
  ];

  constructor() {}
}
