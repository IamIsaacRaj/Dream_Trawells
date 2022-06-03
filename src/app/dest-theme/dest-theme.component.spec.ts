import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestThemeComponent } from './dest-theme.component';

describe('DestThemeComponent', () => {
  let component: DestThemeComponent;
  let fixture: ComponentFixture<DestThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
