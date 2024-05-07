import { Component, OnInit } from '@angular/core';
import {NGXLogger} from "ngx-logger";
import {SimulerScriptService} from "../../simuler-script/simuler-script.service";
interface SimulationResult{
  id:any;
  rapport:string;
  dateDeSimulation:any;
  status:any;
  withError:any;
  script : File;
}
@Component({
  selector: 'app-afficher-historique-simulations',
  templateUrl: './afficher-historique-simulations.component.html',
  styleUrls: ['./afficher-historique-simulations.component.css']
})
export class AfficherHistoriqueSimulationsComponent implements OnInit {
  simulations : SimulationResult[] | undefined;
  pageSize:number=10;
  page:number=1;
  collectionSize:number =0;
  constructor(
      private logger: NGXLogger,
      private service: SimulerScriptService) { }

  ngOnInit() {
    this.refreshHistory()
  }
  refreshHistory(){
    this.service.getAllResult().subscribe((response)=> this.simulations=(JSON.parse((JSON.stringify(response)))));
  }

  valider(u:SimulationResult){
    this.service.validate(u.id).subscribe((response)=> this.refreshHistory());
  }
  rejeter(u:SimulationResult){
    this.service.reject(u.id).subscribe((response)=> this.refreshHistory());

  }

  showFile(u:SimulationResult){
  this.service.showFile(u).subscribe(blob => {
      const link = document.createElement('a');
      // @ts-ignore
    link.href = URL.createObjectURL(blob);
      link.download = 'script.sql';
      link.click();
    });
  }
}
