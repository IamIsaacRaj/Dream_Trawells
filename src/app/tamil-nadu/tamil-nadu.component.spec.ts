import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamilNaduComponent } from './tamil-nadu.component';

describe('TamilNaduComponent', () => {
  let component: TamilNaduComponent;
  let fixture: ComponentFixture<TamilNaduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamilNaduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TamilNaduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
