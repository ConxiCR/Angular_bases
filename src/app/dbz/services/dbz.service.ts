import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService{

     //evento submit de javascript
 /* agregar( event:any ){
    event.preventDefault();
    console.log(event);
  }*/
  //arreglo de personajes[]

  //creamos la propiedad privada
  private _personajes:Personaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];
  //creamos un get
  get personajes():Personaje[]{
    //separa cada uno de los elementos independientes que tiene el arreglo y crea uno nuevo
    return [...this._personajes];
  }
  //para hacer mas seguro el acceso a los personajes. Nadie pueda manipular. Creamos una propiedad
  constructor(){}
  //creamos método del servicio
  agregarPersonaje( personaje:Personaje ){
    this._personajes.push( personaje );

  }


}