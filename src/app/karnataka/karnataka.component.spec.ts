import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnatakaComponent } from './karnataka.component';

describe('KarnatakaComponent', () => {
  let component: KarnatakaComponent;
  let fixture: ComponentFixture<KarnatakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnatakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarnatakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
