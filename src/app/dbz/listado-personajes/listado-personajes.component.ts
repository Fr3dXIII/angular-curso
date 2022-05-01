import { Component, Input, OnInit } from '@angular/core';

import { Personaje } from '../interfces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})


export class ListadoPersonajesComponent  {

  //@Input() personajes : Personaje [] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){ }

  
}
