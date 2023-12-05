import { ComponentFixture, TestBed } from '@angular/core/testing';

import { beveragecomponent } from './beverage.component';

describe('beveragecomponent', () => {
  let component: beveragecomponent;
  let fixture: ComponentFixture<beveragecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [beveragecomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(beveragecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
