export interface TreeNode {
    name: string;
    children?: TreeNode[];
}
export class FolderStruct {
    name: string | "";
    hasChild: boolean | true;
    content: string | "";
    children?: FolderStruct[];
    level: number | 0;
    expandable:boolean=true;

    constructor(props: any) {
       this.name=props.name;
        this.hasChild=props.hasChild;
        this.content=props.content;
        this.children=props.children;
        this.level=props.level;
        this.expandable=props.expandable;


    }

}
