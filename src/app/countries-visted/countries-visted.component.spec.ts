import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesVistedComponent } from './countries-visted.component';

describe('CountriesVistedComponent', () => {
  let component: CountriesVistedComponent;
  let fixture: ComponentFixture<CountriesVistedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesVistedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesVistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
