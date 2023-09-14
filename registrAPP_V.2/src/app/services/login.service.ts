import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInUser: string | null = null;

  private usuarios = [
    { username: 'joaquin', password: '1234', imgSrc:'assets/img/perfil_1.jpg' },
    { username: 'christian', password: '1234', imgSrc:'assets/img/perfil_2.jpg'},
  ];

  login(username: string, password: string): boolean {
    if (this.authenticateUser(username, password)){
      this.loggedInUser = username;
      
      return true;
    }
    return false;
  }

  getUsername(): string | null {
    return this.loggedInUser;
  }

  getPassword(passUsername: string) {
    const user = this.usuarios.find(
      (u) => u.username === passUsername);
      if (user){
        return user.password;
      }
      return null;
  }

  getImg(): string | null {
    if(this.loggedInUser){
      const user = this.usuarios.find(
        (u) => u.username === this.loggedInUser);
      if (user){
        return user.imgSrc;
      }
    }
    return null;
  }

  private authenticateUser(username: string, password: string): boolean {
    const user = this.usuarios.find(
      (u) => u.username === username && u.password === password
    )
    return !!user;
  } 
  

  constructor() { }

}
