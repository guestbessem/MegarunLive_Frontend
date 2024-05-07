export class Utilisateur {
      cin? : string;

      nom? : string;
    prenom? : string;
    email? : string;
    role? : string;
    password?: string;

    constructor(cin: string | undefined) {
        this.cin=cin;


        
    }


}
