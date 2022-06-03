import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HillStationComponent } from './hill-station.component';

describe('HillStationComponent', () => {
  let component: HillStationComponent;
  let fixture: ComponentFixture<HillStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HillStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HillStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
