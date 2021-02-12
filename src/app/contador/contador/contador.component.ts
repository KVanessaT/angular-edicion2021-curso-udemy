import { Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    
    <h4>La base es : {{base}}</h4>
    <button (click)="acumulador(base)"> + {{base}}</button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumulador(-base)"> - {{base}}</button>
    
    `
})
export class ContadorComponent{

    title = 'CONTADOR APP';
  numero: number = 10;
  base: number = 5;

  acumulador(valor) {
    this.numero += valor 
  }
}
