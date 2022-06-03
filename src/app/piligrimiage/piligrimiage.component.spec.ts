import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiligrimiageComponent } from './piligrimiage.component';

describe('PiligrimiageComponent', () => {
  let component: PiligrimiageComponent;
  let fixture: ComponentFixture<PiligrimiageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiligrimiageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiligrimiageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
