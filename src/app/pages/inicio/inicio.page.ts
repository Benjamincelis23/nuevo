import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string = '';  // Variable para almacenar el nombre completo del usuario

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

    this.nombreUsuario = 'Usuario';
  }

  closeMenu() {
    this.menuCtrl.close(); // Cierra el menú
  }
}
