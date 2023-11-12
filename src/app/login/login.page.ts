import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoderticService } from '../poder/podertic.service';
import { AlertController, NavController } from '@ionic/angular';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public poderticService: PoderticService,
    public router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController
  ) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }
  ngOnInit() {

  }

  async iniciar(){
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      var usuario = JSON.parse(usuarioString);

    if(usuario.correo == f.correo && usuario.password == f.password){
      console.log('ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('perfil-estudiante', { state: { userData: JSON.stringify(usuario) } });
    }else{
        const alert = await this.alertController.create({
          header: 'Datos incompletos',
          message: 'Los datos ingresados no son correctos',
          buttons: ['Aceptar']
        });
  
        await alert.present();
    }
  }
  }
}