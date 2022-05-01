import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfces/dbz.interface';

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

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return; }

    this.onNuevoPersonaje.emit(this.nuevo);

   
    console.log(this.nuevo);

  }

}
