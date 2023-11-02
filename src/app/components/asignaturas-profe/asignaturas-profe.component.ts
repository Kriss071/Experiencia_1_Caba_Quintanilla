import { Component, OnInit, inject } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignaturas-profe.service';

@Component({
  selector: 'app-asignaturas-profe',
  templateUrl: './asignaturas-profe.component.html',
  styleUrls: ['./asignaturas-profe.component.scss'],
})
export class AsignaturasProfeComponent  implements OnInit {

  constructor() { }

  asignaturas: any[]; // Declaración de una variable para almacenar los datos
  asignaturaSvc = inject(AsignaturaService);


  ngOnInit() {
    this.asignaturaSvc.getAsignatura().subscribe((data: any[]) => {
      this.asignaturas = data; // Almacenar los datos en la variable asignaturas
    });
  }
}
