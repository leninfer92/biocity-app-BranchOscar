import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVehiculoComponent } from './estado-vehiculo.component';

describe('EstadoVehiculoComponent', () => {
  let component: EstadoVehiculoComponent;
  let fixture: ComponentFixture<EstadoVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoVehiculoComponent]
    });
    fixture = TestBed.createComponent(EstadoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
