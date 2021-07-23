import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = ' Welcome Shop on line -  4.0 (by LIPATIA)';

  constructor() { }

  ngOnInit(): void {
  }


  /*----------- Local Storage ---------------*/

  /* Guardara en Local Storage esta lista */
  lstGuardar = [
    {
      name: 'Martin',
      lastname: 'kerbell',
      age: 21
    },
    {
      name: 'Esteban',
      lastname: 'Quito',
      age: 341
    }
  ];

  lista: string[] = [];
  llss: string = '';
  key = 'myKey';

  /* guarda localStorage , convertir pues solos nos permite guardar un string*/
  guardar() {
    localStorage.setItem(this.key, JSON.stringify(this.lstGuardar));
  }

  /* muestra */
  obtener() {
    const list = localStorage.getItem(this.key);

    /* no anda asi como abajo 
    console.log('DATO: ', JSON.parse(list));*/

    console.log('DATO: ', list);
    console.log('dato tipo: ', typeof (list));

    /* o = JSON.parse(list); */

    var toString = Object.prototype.toString;

    if (list === null) {
      return alert('null lst');
    } else if (typeof (list) === 'number') {
      return alert('Numero');
    } else if (typeof (list) === 'object') {
      return alert('object');
    } else if (typeof (list) === 'string') {
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        console.log('length' + list.length);

        /*  setInterval(this.removeStorage, 2000); */

      }
      return alert('string');
    }

    /*  list.((element: any)=>{ 
       let ele = document.getElementById('local');
       let div = document.createElement('div');
       div.innerHTML = element.name + '' + element.lastname;
       ele?.appendChild(div);
     })*/
  }

  myFunction() {
    setInterval(this.alertFunc, 3000);
  }

  alertFunc(): boolean {
    alert("Hello!");
    return true;
  }

  /* eliminar */
  removeStorage() {
    try {
      localStorage.removeItem(this.key);
    }
    catch (e) {
      console.log('removeStorage: Error removing key [' + this.key + '] from localStorage: ' + JSON.stringify(e));
      return false;
    }
    console.log('Is remove key ');

    return true;
  }

}
