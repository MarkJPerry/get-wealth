import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliosListComponent } from './portfolios-list.component';

describe('PortfoliosListComponent', () => {
  let component: PortfoliosListComponent;
  let fixture: ComponentFixture<PortfoliosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
