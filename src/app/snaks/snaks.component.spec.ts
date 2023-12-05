import { ComponentFixture, TestBed } from '@angular/core/testing';

import { snakscomponent } from './snaks.component';

describe('snakscomponent', () => {
  let component: snakscomponent;
  let fixture: ComponentFixture<snakscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [snakscomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(snakscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
