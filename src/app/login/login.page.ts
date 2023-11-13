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
  
        // Redirige a la página correspondiente según el tipo de usuario
        this.redirigirSegunTipoUsuario();
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        // Muestra un mensaje de error al usuario
        this.mostrarMensajeError('Datos incorrectos. Por favor, verifique su correo y contraseña.');
      }
    );
  }
  
  redirigirSegunTipoUsuario() {
    const emailDomain = this.correo.split('@')[1];
    if (emailDomain === 'duocuc.cl') {
      this.router.navigate(['/perfil-estudiante'], { replaceUrl: true });
    } else if (emailDomain === 'profesor.duoc.cl') {
      this.router.navigate(['/perfil-docente'], { replaceUrl: true });
    } else if (emailDomain === 'duoc.cl') {
      this.router.navigate(['/perfil-administrativo'], { replaceUrl: true });
    } else {
      this.router.navigate(['/'], { replaceUrl: true });
    }
  }
  
  mostrarMensajeError(mensaje: string) {
    this.alertController.create({
      header: 'Error de inicio de sesión',
      message: mensaje,
      buttons: ['Aceptar']
    }).then(alert => alert.present());
  }
}  
