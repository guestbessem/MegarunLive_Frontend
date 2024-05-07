import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNestedOverviewExampleComponent } from './tree-nested-overview-example.component';

describe('TreeNestedOverviewExampleComponent', () => {
  let component: TreeNestedOverviewExampleComponent;
  let fixture: ComponentFixture<TreeNestedOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeNestedOverviewExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeNestedOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
