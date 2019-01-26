import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoListaComponent } from './catalogo-lista.component';

describe('CatalogoListaComponent', () => {
  let component: CatalogoListaComponent;
  let fixture: ComponentFixture<CatalogoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
