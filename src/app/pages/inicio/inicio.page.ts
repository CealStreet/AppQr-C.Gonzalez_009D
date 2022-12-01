
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


  constructor(private menuController: MenuController, private navController: NavController) { }

  Usuario=localStorage.getItem('nombre')


  ngOnInit() {
   
  }
  cerrarSesion() {
    localStorage.clear()
    this.navController.navigateRoot('login');
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
