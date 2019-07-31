import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogggerComponent } from './loggger.component';

describe('LogggerComponent', () => {
  let component: LogggerComponent;
  let fixture: ComponentFixture<LogggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
