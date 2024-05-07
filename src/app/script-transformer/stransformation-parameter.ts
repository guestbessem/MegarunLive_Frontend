export class STransformationParameters {
    id? : number;
    dbName? : string='';
    url? : string='';
    port? : string='';
    user1? : string='';
    user2? : string='';
    source_File_Name_User_1? : string='';
    source_File_Name_User_2? : string='';
    file0_regex_User_1? : string='';
    file1_regex_User_1? : string='';
    file0_regex_User_2 ?: string='';
    file1_regex_User_2? : string='';
    constructor(dbName?: string,
                url?: string,
                port?: string,
                user1?: string,
                user2?: string,
                source_File_Name_User_1?: string,
                source_File_Name_User_2?: string,
                file0_regex_User_1?: string,
                file1_regex_User_1?: string,
                file0_regex_User_2?: string,
                file1_regex_User_2?: string) {
        this.dbName = dbName;
        this.url = url;
        this.port = port;
        this.user1 = user1;
        this.user2 = user2;
        this.source_File_Name_User_1 = source_File_Name_User_1;
        this.source_File_Name_User_2 = source_File_Name_User_2;
        this.file0_regex_User_1 = file0_regex_User_1;
        this.file1_regex_User_1 = file1_regex_User_1;
        this.file0_regex_User_2=file0_regex_User_2;
        this.file1_regex_User_2 = file1_regex_User_2;
    }

}
export class ScriptTransformation {
    id?: number;
    status?: string;
    sourceScripts?: any;
    transformedScripts?:any;
    sparams?: STransformationParameters;
    tempLocation?: string;
    constructor(
                  sourceScripts?: any,
                  transformedScripts?:any,
                  sparams?: STransformationParameters,
                  tempLocation?: string, status?: string) {
        this.status=status;
        this.sourceScripts=sourceScripts;
        this.transformedScripts=transformedScripts;
        this.sparams=sparams;
        this.tempLocation=tempLocation;
    }
}
