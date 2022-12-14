import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-feriado',
  templateUrl: './feriado.page.html',
  styleUrls: ['./feriado.page.scss'],
})
export class FeriadoPage implements OnInit {

  feriados:any;

  constructor(private ApiService:ApiService,
              private menuController: MenuController ) { }
  ngOnInit() {
    this.ApiService.getFeriados().subscribe(resp => {
      this.feriados=resp;
    })
 

  }
mostrarMenu(){
  this.menuController.open('first');
}
}
