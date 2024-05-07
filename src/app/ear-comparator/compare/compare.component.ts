import { HttpClient} from '@angular/common/http';
import {Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation,} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {UploadServiceService} from "../services/upload-service.service";
import {Folder} from "../tree-nested-overview-example/tree-nested-overview-example.component";
import {MatTabGroup} from "@angular/material/tabs";

class sourceTargetContent{
  source:string;
  target: string;
  isFileValid:boolean=true;

  constructor(source:any,target:any ) {
    this.source=source;
    this.target=target;

  }

}
class Contents{
 name:string;
source: string;
target:string
  constructor(name:any,source:any,target:any) {
    this.name=name;
    this.source=source;
    this.target=target;

  }
}
@Component({
  selector: 'app-ear-comparator',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CompareComponent {
  selectedFile: File;
  file1Name: string | undefined;
  file2Name: string | undefined;
  file1: File;

  file2: File;

  [key: string]: any;

  modified: any;
  removed: any;
  added: any;
  report: any
  file: any;
  resultFolder: Folder[] | undefined;
  isFile1Valid: boolean = true;
  isFile2Valid: boolean = true;
  @ViewChild('tabGroup', { static: true }) tabGroupRef: ElementRef =new ElementRef<any>('tabGroup');


  contents: Contents[] = [];
  hasContent: boolean = false;

  constructor(private http: HttpClient, private router: Router, private service: UploadServiceService
      , private formBuilder: FormBuilder, private el: ElementRef) {
    this.file1 = new File([], 'file');
    this.file2 = new File([], 'file');
    this.selectedFile = new File([], 'file');

  }
  ngAfterViewInit(): void {
    const tabGroupElement: MatTabGroup = this.tabGroupRef.nativeElement;
    tabGroupElement.selectedIndex = 1; // Index of the initially selected tab (e.g., 0 for the first tab, 1 for the second tab, etc.)
  }
  showContent(event: any,tabGroup:any) {
    if (!this.contains(event.name)) {

      this.contents.push(new Contents(event.name, event.source, event.target));
      console.log("contents " + event.source);
      if (event != '') {
        this.hasContent = true;
      }
    }
    this.navigateToTab(event,tabGroup);

  }
  contains(name:any){
   let exists=false;
    this.contents.forEach((value, index) => {
      if (value.name == name) exists=true;
    });
    return exists;
  }

  compare(event: { preventDefault: () => void; },tabGroup:any) {
    event.preventDefault();
    this.resultFolder = [];
    const formData = new FormData();
    formData.append('file1', this.file1);
    formData.append('file2', this.file2);
    this.service.getComparisonResult(formData).subscribe((response) => { // @ts-ignore
      let result = (JSON.parse((JSON.stringify(response))));
      this.resultFolder = result.children;
      this.contents = [];
      tabGroup.selectedIndex=1;
    });
  }

  // @ts-ignore
  transformData(response: Folder[]) {
    return response.map((node: Folder) => ({
      label: node.name,
      children: node.children ? this.transformData(node.children) : [], expanded: true,
    }));
  }

  closeTab(c: Contents) {
    this.RemoveElementFromArray(c.name);
  }

  RemoveElementFromArray(name: string) {
    this.contents.forEach((value, index) => {
      if (value.name == name) this.contents.splice(index, 1);
    });
  }

  file1change(event: any) {
    this.file1 = event;
    const fileName1: string = this.file1.name;
    console.log("file extension:", fileName1.split('.').pop());
    if (fileName1.split('.').pop() !== 'ear') {
      this.isFile1Valid = false;
      event.target.value = ''; // Réinitialiser la sélection du fichier
    } else {
      this.isFile1Valid = true;

    }
  }

  file2change(event: any) {
    this.file2 = event;
    const fileName2: string = this.file2.name;
    console.log("file extension:", fileName2.split('.').pop());
    if (fileName2.split('.').pop() !== 'ear') {
      this.isFile2Valid = false;
      event.target.value = ''; // Réinitialiser la sélection du fichier
    } else {
      this.isFile2Valid = true;

    }
  }
  navigateToTab(tabId: any, tabGroup: MatTabGroup): void {
      tabGroup.selectedIndex = this.getIndex(tabId.name);
  }
  getIndex(name:any):number{
    let ind=0;
    this.contents.forEach((value, index) => {
      console.log('value name '+value.name + ' == name '+name);
      if (value.name == name) ind=index+2;
    });
    return ind;
  }
}
