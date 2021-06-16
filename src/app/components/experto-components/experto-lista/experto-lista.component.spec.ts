import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoListaComponent } from './experto-lista.component';

describe('ExpertoListaComponent', () => {
  let component: ExpertoListaComponent;
  let fixture: ComponentFixture<ExpertoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
