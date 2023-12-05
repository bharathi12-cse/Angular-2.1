import { ComponentFixture, TestBed } from '@angular/core/testing';

import { burgercomponent } from './burger.component';

describe('burgercomponent', () => {
  let component: burgercomponent;
  let fixture: ComponentFixture<burgercomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [burgercomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(burgercomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
