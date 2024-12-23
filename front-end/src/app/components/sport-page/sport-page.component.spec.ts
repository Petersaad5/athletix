import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportPageComponent } from './sport-page.component';

describe('SportPageComponent', () => {
  let component: SportPageComponent;
  let fixture: ComponentFixture<SportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
