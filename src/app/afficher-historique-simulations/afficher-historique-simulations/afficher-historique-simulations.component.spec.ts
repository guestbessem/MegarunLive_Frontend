import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherHistoriqueSimulationsComponent } from './afficher-historique-simulations.component';

describe('AfficherHistoriqueSimulationsComponent', () => {
  let component: AfficherHistoriqueSimulationsComponent;
  let fixture: ComponentFixture<AfficherHistoriqueSimulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherHistoriqueSimulationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherHistoriqueSimulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
