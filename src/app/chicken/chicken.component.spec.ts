import { ComponentFixture, TestBed } from '@angular/core/testing';

import { chickencomponent } from './chicken.component';

describe('chickencomponent', () => {
  let component: chickencomponent;
  let fixture: ComponentFixture<chickencomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [chickencomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(chickencomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
