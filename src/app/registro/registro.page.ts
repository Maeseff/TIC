import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {
    this.formularioRegistro = this.fb.group({
      'rut': new FormControl("",Validators.required),
      'nombre': new FormControl("",Validators.required),
      'apellido_paterno': new FormControl("",Validators.required),
      'apellido_materno': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que completar todos los campos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      rut: f.rut,
      nombre: f.nombre,
      apellido_paterno: f.apellido_paterno,
      apellido_materno: f.apellido_materno,
      correo: f.correo,
      password: f.password,
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('login');

  }

}
