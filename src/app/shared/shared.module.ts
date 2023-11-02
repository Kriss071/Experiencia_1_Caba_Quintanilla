import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AsignaturasProfeComponent } from '../components/asignaturas-profe/asignaturas-profe.component';



@NgModule({
  declarations: [HeaderComponent,
  CustomInputComponent,
  LogoComponent,
  AsignaturasComponent,
AsignaturasProfeComponent],
  exports:[HeaderComponent,
  CustomInputComponent,
  LogoComponent,
  ReactiveFormsModule,
  AsignaturasComponent,
  AsignaturasProfeComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SharedModule { }
