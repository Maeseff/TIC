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

        // Check if the email domain is "profesor.duoc.cl"
        const emailDomain = this.correo.split('@')[1];
        if (emailDomain === 'profesor.duoc.cl') {
          // Redirect to the teacher's profile page
          this.router.navigate(['/perfil-docente']);
        } else if (emailDomain === 'duocuc.cl') {
          // Redirect to the student's profile page
          this.router.navigate(['/perfil-estudiante']);
        } else if (emailDomain == 'duoc.cl'){
          this.router.navigate(['/perfil-administrativo']);
        }
        else {
          // Redirect to a default page (e.g., home page)
          this.router.navigate(['/']);
        }
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
