import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  })
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Thor', 'Hulk', 'Thor'];
  //propiedad para visualizar el heroe borrado. Inicializar heroe vacio
  heroeBorrado: string = '';

  borrarHeroe(){
    //1 borra todos los elementos
    //console.log("borrando...");
    //this.heroes = [];
    //2 otra opción borrado heroes
    //const heroeBorrado = this.heroes.shift();
    //1a parte referencia a la constante. 2a parte referencia a la propiedad heroeBorrado
    //this.heroeBorrado = heroeBorrado;
    //se puede unificar en una sola línea. El shift puede devolver string o undefined aplicamos || 
    this.heroeBorrado = this.heroes.shift() || '';

  }
}
