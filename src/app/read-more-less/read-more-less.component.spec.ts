import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreLessComponent } from './read-more-less.component';

describe('ReadMoreLessComponent', () => {
  let component: ReadMoreLessComponent;
  let fixture: ComponentFixture<ReadMoreLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreLessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
