import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APComponent } from './ap.component';

describe('APComponent', () => {
  let component: APComponent;
  let fixture: ComponentFixture<APComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
