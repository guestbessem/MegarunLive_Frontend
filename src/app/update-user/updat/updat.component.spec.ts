import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatComponent } from './updat.component';

describe('UpdatComponent', () => {
  let component: UpdatComponent;
  let fixture: ComponentFixture<UpdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
