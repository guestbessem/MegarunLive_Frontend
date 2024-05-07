import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulerScriptComponent } from './simuler-script.component';

describe('SimulerScriptComponent', () => {
  let component: SimulerScriptComponent;
  let fixture: ComponentFixture<SimulerScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulerScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulerScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
