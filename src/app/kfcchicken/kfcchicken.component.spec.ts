import { ComponentFixture, TestBed } from '@angular/core/testing';

import { kfcchickencomponent } from './kfcchicken.component';

describe('kfcchickencomponent', () => {
  let component: kfcchickencomponent;
  let fixture: ComponentFixture<kfcchickencomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [kfcchickencomponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(kfcchickencomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
