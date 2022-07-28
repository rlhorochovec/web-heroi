import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarImagemComponent } from './enviar-imagem.component';

describe('EnviarImagemComponent', () => {
  let component: EnviarImagemComponent;
  let fixture: ComponentFixture<EnviarImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
