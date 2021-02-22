import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizadoresFormComponent } from './utilizadores-form.component';

describe('UtilizadoresFormComponent', () => {
  let component: UtilizadoresFormComponent;
  let fixture: ComponentFixture<UtilizadoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilizadoresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizadoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
