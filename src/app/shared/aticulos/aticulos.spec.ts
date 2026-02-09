import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aticulos } from './aticulos';

describe('Aticulos', () => {
  let component: Aticulos;
  let fixture: ComponentFixture<Aticulos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aticulos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aticulos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
