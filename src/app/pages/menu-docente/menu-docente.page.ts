import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.page.html',
  styleUrls: ['./menu-docente.page.scss'],
})
export class MenuDocentePage implements OnInit {

  constructor( private navController: NavController) { }

  ngOnInit() {
  }
  cerrarSesion() {
    localStorage.clear()
    this.navController.navigateRoot('login');
  }

}
