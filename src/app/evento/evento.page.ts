import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  eventos: any = []

  constructor(
    private poderticService: PoderticService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.poderticService.getEventos().subscribe(
      (res) => {
        this.eventos = res;
      },
      (err) => console.log(err)
    )
  }
  async inscribirse() {
    // Lógica de inscripción aquí
  
    // Mostrar mensaje emergente
    const toast = await this.toastController.create({
      message: 'Te has inscrito correctamente al evento',
      duration: 2000, // Duración del mensaje en milisegundos
      position: 'bottom', // Posición del mensaje
      color: 'primary', // Puedes ajustar el color según tus preferencias
    });
  
    toast.present();
  }
}
