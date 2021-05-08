import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //arreglo de personajes. Inicialización bacio
  //personajes: Personaje [] = [];
  //valor por defecto del componente 
  nuevo:Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  } 
  constructor(){}

  //Refactorización

  //get personajes():Personaje[]{
    //return this.dbzService.personajes;
  //}
  //metodo para llamar al objeto. El evento se recibió del componente hijo lo recibió el padre y el padre lo interpretó
  //agregarNuevoPersonaje( argumento: Personaje) {
  //this.personajes.push( argumento );
    //console.log( argumento );
  //}
  //injeccion de dependencias. Cuando se crea el componente asigno los personajes con el valor que tenga el servicio en la parte de los personajes
  //constructor ( private dbzService: dbzService){
    //this.personajes = this.dbzService.personajes;
 //}
 
}
