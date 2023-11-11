import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {
  eventos = [
    {
      nombre: 'Liderazgo Femenino',
      imagen: 'assets/descarga.jpg',
      area: 'Lorem',
      descripcion: 'Ipsum',
    },
    {
      nombre: 'Evento de ...',
      imagen: 'assets/images.jpg',
      area: 'Lorem',
      descripcion: 'Ipsum',
    },
    // Agrega más eventos según sea necesario
  ];

  inscribirse(evento: any) {
    // Lógica para la inscripción, puedes implementar según tus necesidades
    console.log('Inscripción para', evento.nombre);
  }
}
