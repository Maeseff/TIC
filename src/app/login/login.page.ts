import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoderticService } from '../poder/podertic.service';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = '';
  password: string = '';

  constructor(
    public poderticService: PoderticService,
    public router: Router,
    public alertController: AlertController,
    private authService: AuthService,
  ) { }
  
  ngOnInit() {}

  iniciarSesion() {
    this.poderticService.login(this.correo, this.password).subscribe(
      (data) => {
        console.log('Respuesta del inicio de sesión:', data);

        // Guarda el token en el servicio de autenticación
        this.authService.setToken(data.jwt);

        // Directly navigate to the desired route (e.g., '/user')
        this.router.navigate(['/perfil-estudiante']);
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        // Muestra un mensaje de error al usuario
        this.mostrarMensajeError('Datos incorrectos. Por favor, verifique su correo y contraseña.');
      }
    );
  }

  mostrarMensajeError(mensaje: string) {
    this.alertController.create({
      header: 'Error de inicio de sesión',
      message: mensaje,
      buttons: ['Aceptar']
    }).then(alert => alert.present());
  }
}
