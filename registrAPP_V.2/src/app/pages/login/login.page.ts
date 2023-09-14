import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string ='';
  password:string = '';

  constructor(private loginService: LoginService, private toastc: ToastController, private router:Router ) { }

  ngOnInit() {
  }

  async incorrecto() {
    const toast = await this.toastc.create({
      message: 'Nombre de usuario o contraseña Incorrecta',
      duration: 2000,
      position: 'top',
      color: 'danger',
    });
    await toast.present();
  }
  

  autorizar(){
    if(this.loginService.login(this.username,this.password)){
      this.router.navigate(['/inicio']);
    }
    else{
      this.incorrecto();
    }
  }

}
