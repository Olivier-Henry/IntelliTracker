import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitHeroDialogComponent } from './init-hero-dialog.component';

describe('InitHeroDialogComponent', () => {
  let component: InitHeroDialogComponent;
  let fixture: ComponentFixture<InitHeroDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitHeroDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
