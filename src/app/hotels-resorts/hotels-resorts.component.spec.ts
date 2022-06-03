import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsResortsComponent } from './hotels-resorts.component';

describe('HotelsResortsComponent', () => {
  let component: HotelsResortsComponent;
  let fixture: ComponentFixture<HotelsResortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsResortsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
