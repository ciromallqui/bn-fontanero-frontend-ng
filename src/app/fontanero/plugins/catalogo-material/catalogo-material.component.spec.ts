import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMaterialComponent } from './catalogo-material.component';

describe('CatalogoMaterialComponent', () => {
  let component: CatalogoMaterialComponent;
  let fixture: ComponentFixture<CatalogoMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
