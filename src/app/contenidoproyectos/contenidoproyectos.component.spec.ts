import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoproyectosComponent } from './contenidoproyectos.component';

describe('ContenidoproyectosComponent', () => {
  let component: ContenidoproyectosComponent;
  let fixture: ComponentFixture<ContenidoproyectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoproyectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
