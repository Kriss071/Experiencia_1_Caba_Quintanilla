import { Injectable, inject } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { User } from '../models/user.model';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc,addDoc} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { Asignatura } from '../models/asignatura';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore= inject(AngularFirestore);
  utilSvc= inject(UtilsService);


  ///AUTHHHHH

  getAuth(){
    return getAuth();
  }

  sigIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password )
  }


  sigUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password )
  }

  updateUser(displayName:string){
    return updateProfile(getAuth().currentUser,{displayName})
  } 








  ////BDDDD





  setDocument(path:string, data:any){
    return setDoc(doc(getFirestore(),path), data);
  }


  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }


  //Cerrar Sesion

  signOut(){
    getAuth().signOut;
    localStorage.removeItem('user');
    this.utilSvc.routerLink('/auth');
  }

  addAsignatura(asignatura:Asignatura){
    
  }

  
}
