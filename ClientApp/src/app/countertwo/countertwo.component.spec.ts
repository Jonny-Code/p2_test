import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertwoComponent } from './countertwo.component';

describe('CountertwoComponent', () => {
  let component: CountertwoComponent;
  let fixture: ComponentFixture<CountertwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountertwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
