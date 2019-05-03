import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Swiper2Component } from './swiper2.component';

describe('SwiperComponent', () => {
  let component: Swiper2Component;
  let fixture: ComponentFixture<Swiper2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Swiper2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Swiper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
