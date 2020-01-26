import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustriaPageComponent } from './austria-page.component';

describe('AustriaPageComponent', () => {
  let component: AustriaPageComponent;
  let fixture: ComponentFixture<AustriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
