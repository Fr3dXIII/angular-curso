import { Component, OnInit, EventEmitter } from '@angular/core';
import { Personaje } from '../interfces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  nuevo : Personaje = {
    nombre: 'Número 18',
    poder: 100
  }

  
  agregarNuevoPersonaje( argumento:Personaje ){
    this.personajes.push(argumento);    
  }

  constructor( private dbzService: DbzService ){}
}
