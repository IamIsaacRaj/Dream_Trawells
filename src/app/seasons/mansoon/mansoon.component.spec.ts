import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MansoonComponent } from './mansoon.component';

describe('MansoonComponent', () => {
  let component: MansoonComponent;
  let fixture: ComponentFixture<MansoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MansoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MansoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
