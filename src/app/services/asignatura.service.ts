import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  firestore= inject(AngularFirestore);

  getAsignatura(): Observable<any[]> {
    return this.firestore.collection('asignatura').valueChanges();
  }

  constructor() { }
}
