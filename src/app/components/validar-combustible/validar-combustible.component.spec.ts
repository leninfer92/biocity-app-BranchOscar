import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCombustibleComponent } from './validar-combustible.component';

describe('ValidarCombustibleComponent', () => {
  let component: ValidarCombustibleComponent;
  let fixture: ComponentFixture<ValidarCombustibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidarCombustibleComponent]
    });
    fixture = TestBed.createComponent(ValidarCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
