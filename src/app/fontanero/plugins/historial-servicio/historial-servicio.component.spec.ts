import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialServicioComponent } from './historial-servicio.component';

describe('HistorialServicioComponent', () => {
  let component: HistorialServicioComponent;
  let fixture: ComponentFixture<HistorialServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
