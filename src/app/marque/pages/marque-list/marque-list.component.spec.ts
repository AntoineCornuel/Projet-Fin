import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueListComponent } from './marque-list.component';

describe('MarqueListComponent', () => {
  let component: MarqueListComponent;
  let fixture: ComponentFixture<MarqueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
