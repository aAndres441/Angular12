import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() changeToogle = new EventEmitter<boolean>();
  toogleValor = false;

  

toogled(){
  if (this.toogleValor === undefined){
    this.toogleValor = false;
  }
  this.toogleValor = !this.toogleValor;
  console.log(this.toogleValor);
  let button = document.getElementById('btn-menu-toggle')
  console.log('BOTON', button);
  
  this.changeToogle.emit(this.toogleValor);
}

 /* no los usare
  constructor() {}
  ngOnInit(): void {} */

}
