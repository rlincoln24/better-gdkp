import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdkpEventComponent } from './gdkp-event.component';

describe('GdkpEventComponent', () => {
  let component: GdkpEventComponent;
  let fixture: ComponentFixture<GdkpEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdkpEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdkpEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
