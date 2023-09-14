import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  userImgSrc: string | null;

  constructor(
    private loginService: LoginService,
    private toastc: ToastController
  ) { 
    this.userImgSrc = null;
  }

  ngOnInit() {
    const username = this.loginService.getUsername();
    
    if (username) {
      this.toastBienvenida(username);
    }

    this.userImgSrc = this.loginService.getImg();
  }

  async toastBienvenida(username:string){
    const toast = await this.toastc.create({
      message: `¡Bienvenido, ${username.charAt(0).toUpperCase()}${username.slice(1)}!`,
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    await toast.present();
  }

}
