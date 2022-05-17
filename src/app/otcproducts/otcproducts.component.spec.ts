import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcproductsComponent } from './otcproducts.component';

describe('OtcproductsComponent', () => {
  let component: OtcproductsComponent;
  let fixture: ComponentFixture<OtcproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtcproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtcproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
