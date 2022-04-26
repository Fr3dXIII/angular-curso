import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent  {

  heroes : string [] = ['Thor','Ironman','Spiderman','Hulk'];
  heroesBorrados : string [] = [];
  


  borrarHeroe() {        
    const elementoBorrado = this.heroes.shift() || '';

    this.heroesBorrados.push(elementoBorrado);

  }  

}
