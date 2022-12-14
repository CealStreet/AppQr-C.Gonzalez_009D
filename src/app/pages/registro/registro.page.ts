import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular'
import { NavController } from '@ionic/angular';
import {
  FormGroup, FormControl, Validators, FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[];


  constructor(private registroService: RegistroserviceService,
    private navController: NavController,
    private alertController: AlertController, 
    private toastController: ToastController,
    private fb:FormBuilder) { 
        this.formularioRegistro = this.fb.group({
            'nombre': new FormControl("", Validators.required),
            'correo' : new FormControl("", [Validators.required, Validators.email]), 
            'password': new FormControl("", Validators.compose([
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(12),
             
            ])), 
            'confirmaPass': new FormControl("", Validators.compose([
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(12),
              ])),
            'tipo': new FormControl("", Validators.required),

  });
}

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
    }

    else{
    this.newUsuario.nomUsuario = form.nombre;
    this.newUsuario.correoUsuario = form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario = form.confirmaPass;
    this.newUsuario.tipoUsuario = form.tipo;
    

    this.registroService.getUsuarios().then(datos=>{ 
    this.usuarios = datos; 

    if (!datos || datos.length==0){
      this.registroService.addDatos(this.newUsuario).then(dato=>{ 
        this.newUsuario=<Usuario>{};
        this.showToast('Usuario Creado ');
      });
      this.formularioRegistro.reset();
      this.navController.navigateRoot('login');
    }else{
    
    for (let obj of this.usuarios){
      if (this.newUsuario.correoUsuario == obj.correoUsuario){
        existe = 1;
      }
    }
    //Fin del for
  
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistro.reset();
      }
      else{
        this.registroService.addDatos(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navController.navigateRoot('login');
      }
    }
    })  
  
  }//finelse

  }//findelmetodo

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }
  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg, 
      duration: 3000
    });
    toast.present();
  }


}
