import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa el controlador de navegación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginUsuario: string = '';  // Correo electrónico del usuario
  loginContrasena: string = '';  // Contraseña del usuario
  mensajeError: string = '';  // Variable para mostrar un mensaje de error

  constructor(private navCtrl: NavController) {}

  // Método para validar las credenciales del usuario (aquí solo validación estática)
  async ValidarCredenciales() {
    // Validación simple con usuario y contraseña estáticos
    if (this.loginUsuario === 'usuario@example.com' && this.loginContrasena === 'contraseña123') {
      this.navCtrl.navigateForward('/inicio');  // Redirige a la página de inicio
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';  // Muestra mensaje de error si las credenciales no coinciden
    }
  }

  // Método para redirigir a la página de registro
  navigateToRegister() {
    this.navCtrl.navigateForward('/registro');
  }
}
