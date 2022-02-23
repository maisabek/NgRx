import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadApiComponent } from './load-api.component';

describe('LoadApiComponent', () => {
  let component: LoadApiComponent;
  let fixture: ComponentFixture<LoadApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
