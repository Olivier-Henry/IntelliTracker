import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInstallComponent } from './first-install.component';

describe('FirstInstallComponent', () => {
  let component: FirstInstallComponent;
  let fixture: ComponentFixture<FirstInstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstInstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
