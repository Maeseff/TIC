import { Component, OnInit } from '@angular/core';
import { PoderticService } from '../poder/podertic.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  eventos: any = []

  constructor(
    private poderticService: PoderticService,
    public toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.poderticService.getEventos().subscribe(
      (res) => {
        this.eventos = res;
      },
      (err) => console.log(err)
    )
  }
  async inscribirse(evento: any) {
    const alert = await this.alertController.create({
      header: 'Confirmar inscripción',
      message: `¿Estás seguro de inscribirte en el evento "${evento.nombre}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Inscripción cancelada');
          }
        },
        {
          text: 'Inscribirme',
          handler: () => {
            this.realizarInscripcion(evento);
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  private realizarInscripcion(evento: any) {
    // Lógica de inscripción aquí
    this.poderticService.agregarEventoAlHistorial(evento);
  
    // Marcar el evento como inscrito
    evento.inscrito = true;
  
    // Mostrar mensaje emergente
    this.presentToast();
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Te has inscrito correctamente al evento',
      duration: 2000,
      position: 'bottom',
      color: 'primary',
    });
  
    toast.present();
  }
}