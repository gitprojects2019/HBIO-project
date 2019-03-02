import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyerDetailsComponent } from './palyer-details.component';

describe('PalyerDetailsComponent', () => {
  let component: PalyerDetailsComponent;
  let fixture: ComponentFixture<PalyerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
