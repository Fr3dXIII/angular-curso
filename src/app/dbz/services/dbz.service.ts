import { Injectable } from "@angular/core";
import { Personaje } from "../interfces/dbz.interface";

@Injectable()
export class DbzService {

    personajes:Personaje[] = [
        {
            nombre:'Goku',
            poder: 10000
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    constructor(){
        console.log('Servicio Inicializado');
    }



}