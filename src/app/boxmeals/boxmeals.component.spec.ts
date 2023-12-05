import { ComponentFixture, TestBed } from '@angular/core/testing';

import { boxmealscomponent } from './boxmeals.component';

describe('boxmealscomponent', () => {
  let component: boxmealscomponent;
  let fixture: ComponentFixture<boxmealscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [boxmealscomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(boxmealscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
