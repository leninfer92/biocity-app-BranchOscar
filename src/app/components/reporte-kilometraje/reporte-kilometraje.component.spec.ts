import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteKilometrajeComponent } from './reporte-kilometraje.component';

describe('ReporteKilometrajeComponent', () => {
  let component: ReporteKilometrajeComponent;
  let fixture: ComponentFixture<ReporteKilometrajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteKilometrajeComponent]
    });
    fixture = TestBed.createComponent(ReporteKilometrajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
