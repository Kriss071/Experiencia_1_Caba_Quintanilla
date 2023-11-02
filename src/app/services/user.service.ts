import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  firestore= inject(AngularFirestore);

  getUser(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }

  
}
