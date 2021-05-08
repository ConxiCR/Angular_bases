import { Component, EventEmitter, Input, Output  } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  constructor( private dbzService:dbzService ){

  }
  //onNuevoPersonaje emite un nuevo personaje.Ponemos de que tipo de datos es. De tipo personaje. Emite eventos
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  /*
    La llamada desdel input antes de crear ng Model
    cambiarNombre(event:any){
    console.log( event.target.value );
  }*/

  agregar(){
    if(this.nuevo.nombre.trim().length === 0 ){ return; }
    //visualizamos el objeto. Queremos hacer la emisión al componente padre
    //console.log(this.nuevo);
    //emite una interface de tipo nuevo porque es un personaje
    //this.onNuevoPersonaje.emit( this.nuevo );
    //inserción de personajes
    //this.personajes.push( this.nuevo );
    this.dbzService.agregarPersonaje( this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    //console.log(this.personajes)
  }

}
