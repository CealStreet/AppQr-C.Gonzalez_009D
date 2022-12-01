import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';



@Component({
  selector: 'app-menu-estudiante',
  templateUrl: './menu-estudiante.page.html',
  styleUrls: ['./menu-estudiante.page.scss'],
})
export class MenuEstudiantePage implements OnInit {

  constructor( private navController: NavController, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  cerrarSesion() {
    localStorage.clear()
    this.navController.navigateRoot('login');
  }

 scan(){
  this.barcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
   }).catch(err => {
       console.log('Error', err);
   });
 }
}
