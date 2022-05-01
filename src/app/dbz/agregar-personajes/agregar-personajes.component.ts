import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css']
})
export class AgregarPersonajesComponent{
 

  @Input() nuevo:Personaje = {
    nombre :'',
    poder: 0,
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService:DbzService){}

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return; }

    //this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje(this.nuevo);
   
    console.log(this.nuevo);

  }

}
