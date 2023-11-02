import { Component, Injector, OnInit, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { User } from 'src/app/models/user.model';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
})
export class AsignaturasComponent implements OnInit {

  asignaturas: any[]; // Declaración de una variable para almacenar los datos
  asignaturaSvc = inject(AsignaturaService);


  private db: Firestore = getFirestore();


  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  auth = inject(AngularFireAuth);


  ngOnInit() {
    this.asignaturaSvc.getAsignatura().subscribe((data: any[]) => {
      this.asignaturas = data; // Almacenar los datos en la variable asignaturas
    });
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }


  asignarAsignatura(asignaturaId: string, alumnoId: string) {
    const user = this.auth.currentUser;

    if (user) {
      const asignaturaRef = doc(this.db, 'asignatura', asignaturaId);
      try {
        updateDoc(asignaturaRef, {
          alumnoId: alumnoId
        });
        console.log('Asignatura asignada al alumno con éxito.');
      } catch (error) {
        console.error('Error al asignar la asignatura:', error);
      }
    } else {
      console.log('El usuario no está autenticado. Debes iniciar sesión para asignar asignaturas.');
    }

  }

  router= inject(Router);
  
  navigateToPage() {
    // Redirige a la página deseada (reemplaza '/otra-pagina' con la ruta real)
    this.router.navigate(['/pages']);
  }

}
