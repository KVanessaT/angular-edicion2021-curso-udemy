import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CONTADOR APP';
  numero: number = 10;
  base: number = 5;

  acumulador(valor) {
    this.numero += valor 
  }


}
