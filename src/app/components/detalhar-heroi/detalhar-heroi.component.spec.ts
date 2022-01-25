import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharHeroiComponent } from './detalhar-heroi.component';

describe('DetalharHeroiComponent', () => {
  let component: DetalharHeroiComponent;
  let fixture: ComponentFixture<DetalharHeroiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalharHeroiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
