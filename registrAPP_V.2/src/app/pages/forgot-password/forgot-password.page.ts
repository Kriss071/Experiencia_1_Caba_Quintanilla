import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  username: string = '';

  constructor(
    private loginService: LoginService,
    private toastc: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  obtenerPassword(){
    return this.loginService.getPassword(this.username);
  }

  async enviarPassword() {
    const password = this.obtenerPassword();
    if(password){
      const toast = await this.toastc.create({
        message: `Su contraseña es: ${password}, Redirigiendo al login...`,
        duration: 2500,
        position: 'top',
        color: 'success',
      });
      await toast.present();

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    } else {
      const toast = await this.toastc.create({
        message: `Usuario no encontrado`,
        duration: 2000,
        position: 'top',
        color: 'danger',
      });
      await toast.present();
    }
  }

}
