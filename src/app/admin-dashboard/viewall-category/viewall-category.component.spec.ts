import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallCategoryComponent } from './viewall-category.component';

describe('ViewallCategoryComponent', () => {
  let component: ViewallCategoryComponent;
  let fixture: ComponentFixture<ViewallCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
