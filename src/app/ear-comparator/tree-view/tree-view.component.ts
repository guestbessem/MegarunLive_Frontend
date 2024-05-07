import { NestedTreeControl } from '@angular/cdk/tree';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

export interface MyTreeNode {
  name: string;
  children?: MyTreeNode[];
}

@Component({
  selector: 'app-tree-view',
    templateUrl: './tree-view.component.html'
})
export class TreeViewComponent implements OnChanges,OnInit{
  treeControl = new NestedTreeControl<MyTreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MyTreeNode>();
  @Input("TREE_DATA") TREE_DATA: MyTreeNode[] = [];
  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }
    ngOnChanges(changes: SimpleChanges) {
        this.dataSource.data = this.TREE_DATA;
    }
    ngOnInit() {
        this.dataSource.data = this.TREE_DATA;
    }
  hasChild = (_: number, node: MyTreeNode) => !!node.children && node.children.length > 0;
}
/*implements
} OnInit {
  @Input("treeData") TREE_DATA : FolderStruct[]=[];
  hasChild(_: number, node: FolderStruct) {
    return true;
  }
  treeControl = new NestedTreeControl<FolderStruct>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FolderStruct>();
  constructor() {

      this.dataSource.data = this.TREE_DATA;

  }

  ngOnInit() {


      this.dataSource.data = this.TREE_DATA;

  }
}
*/
