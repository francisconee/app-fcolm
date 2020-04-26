import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainercentralComponent } from './containercentral.component';

describe('ContainercentralComponent', () => {
  let component: ContainercentralComponent;
  let fixture: ComponentFixture<ContainercentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainercentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainercentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
