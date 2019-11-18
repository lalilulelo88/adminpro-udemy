import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    this.contarTres().then(
      mensaje => console.log('Termino', mensaje)
    )
      .catch(error => console.log('Error promesa', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    // tslint:disable-next-line: prefer-const
   return new Promise((resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval(() => {
        contador += 1;

        console.log(contador);

        if (contador === 3) {
          // reject('BUUU');
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);

    });


  }

}
