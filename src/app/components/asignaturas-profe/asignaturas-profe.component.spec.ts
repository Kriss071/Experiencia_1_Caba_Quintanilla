import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignaturasProfeComponent } from './asignaturas-profe.component';

describe('AsignaturasProfeComponent', () => {
  let component: AsignaturasProfeComponent;
  let fixture: ComponentFixture<AsignaturasProfeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturasProfeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturasProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
