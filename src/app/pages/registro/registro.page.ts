import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  apellido: string = '';
  rut: string = '';
  telefono: string = '';
  correo: string = '';
  contrasena: string = '';
  errorMessage: string = '';  // Mensaje de error en caso de fallo

  constructor(private router: Router) {}

  // Método para registrar al nuevo usuario
  async registrarUsuario() {
    if (this.nombre && this.apellido && this.rut && this.telefono && this.correo && this.contrasena) {
      try {
        // Aquí puedes guardar los datos localmente, en almacenamiento local, o en una base de datos propia si la tienes

        // Por ejemplo, almacenar los datos en localStorage (aunque no es recomendable para información sensible como contraseñas)
        localStorage.setItem('usuario', JSON.stringify({
          nombre: this.nombre,
          apellido: this.apellido,
          rut: this.rut,
          telefono: this.telefono,
          correo: this.correo,
        }));

        console.log('Usuario registrado:', {
          nombre: this.nombre,
          apellido: this.apellido,
          rut: this.rut,
          telefono: this.telefono,
          correo: this.correo
        });

        // Redirigir a la página de inicio después del registro
        this.router.navigate(['/inicio']);
      } catch (error) {
        console.error('Error de registro:', error);
        this.errorMessage = 'Error al registrar. Intenta nuevamente.';  // Mostrar mensaje de error
      }
    } else {
      this.errorMessage = 'Por favor completa todos los campos.';
    }
  }
}
