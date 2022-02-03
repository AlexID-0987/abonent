import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactitemComponent } from './redactitem.component';

describe('RedactitemComponent', () => {
  let component: RedactitemComponent;
  let fixture: ComponentFixture<RedactitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
