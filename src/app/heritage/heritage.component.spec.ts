import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageComponent } from './heritage.component';

describe('HeritageComponent', () => {
  let component: HeritageComponent;
  let fixture: ComponentFixture<HeritageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
