import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestPlacesComponent } from './dest-places.component';

describe('DestPlacesComponent', () => {
  let component: DestPlacesComponent;
  let fixture: ComponentFixture<DestPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestPlacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
