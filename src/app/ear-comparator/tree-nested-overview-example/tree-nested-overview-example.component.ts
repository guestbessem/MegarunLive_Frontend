import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Input, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { EventEmitter } from '@angular/core';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
export interface Folder {
  name: string;
  data: string;
  children?: Folder[];
  source: String;
  target: String;
  status: string;
}



/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'tree-nested-overview-example',
  templateUrl: 'tree-nested-overview-example.component.html',
  styleUrls: ['tree-nested-overview-example.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class TreeNestedOverviewExample {
  expanded = true;
  treeControl = new NestedTreeControl<Folder>(node => node.children);//récuperer les enfant de chaque noeud
  dataSource = new MatTreeNestedDataSource<Folder>();
  hasContent :boolean=false;
  @Input("TREE_DATA") TREE_DATA: Folder[] = [];
  @Output("contentEmitter") contentEmitter = new EventEmitter();

  content: string='';
  constructor() {
    if( this.TREE_DATA!=null) {
      this.dataSource.data = this.TREE_DATA;
    }
  }
  hasChild = (_: number, node: Folder) => !!node.children && node.children.length > 0;

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.TREE_DATA;
    this.treeControl.dataNodes=this.TREE_DATA;
  }
  ngOnInit() {
    this.dataSource.data = this.TREE_DATA;
    this.treeControl.dataNodes=this.TREE_DATA;
  }
  showContent(node:Folder) {
    console.log("emitting " + node.name);
      this.contentEmitter.emit(node);
  }
  expandAll(){
     if(!this.expanded) {
       this.treeControl.collapseAll();//réduire les dossiers et sous dossiers
     }
     else{
       this.treeControl.expandAll();//etendre les dossiers et sous dossiers
     }
      this.expanded=!this.expanded;
    }

}


/**  Copyright 2023 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license */
