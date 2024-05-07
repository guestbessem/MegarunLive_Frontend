import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptTransformerComponent } from './script-transformer.component';

describe('ScriptTransformerComponent', () => {
  let component: ScriptTransformerComponent;
  let fixture: ComponentFixture<ScriptTransformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptTransformerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptTransformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
