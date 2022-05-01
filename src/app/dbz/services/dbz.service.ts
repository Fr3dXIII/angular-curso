import { Injectable } from "@angular/core";
import { Personaje } from "../interfces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes:Personaje[] = [
        {
            nombre:'Goku',
            poder: 10000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes():Personaje[] {
        return [...this._personajes];
    }

    constructor(){}

    
    agregarPersonaje( argumento:Personaje ){
        this._personajes.push(argumento);
           
    }


}