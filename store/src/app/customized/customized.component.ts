import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-customized',
  templateUrl: './customized.component.html',
  styleUrls: ['./customized.component.scss'],
  providers:[
    { provide: NG_VALUE_ACCESSOR, ///token de injeccion de dependencia de providers
    useExisting: CustomizedComponent,
    multi: true
  }]
})

export class CustomizedComponent implements OnInit, ControlValueAccessor {

  email = '';
  private onChangefn!: Function;

  @Output() hijoOnchangeError = new EventEmitter<boolean>();
  isvalid=true;

  constructor() { }


changeElText($event: any):void {
  this.onChangefn($event.target.value);
console.log('$event.target.value',$event.target);

  /* Bajo para mandar el error y cambiar la clase */
 /* if($event.target.value) */
 this.isvalid=!this.isvalid;
  this.hijoOnchangeError.emit(this.isvalid);
}

  writeValue(valor: string): void {
    this.email=valor;
  }

  registerOnChange(fn: any): void {
    this.onChangefn=fn;
  }


  registerOnTouched(fn: any): void {
    ///throw new Error('Method not implemented.');
  }
  setDisabledState(isDisabled:boolean): void {
    
  }

  ngOnInit(): void {
  }


  fenix(){
    console.log(this.isvalid);
    
    this.hijoOnchangeError.emit(this.isvalid);
    this.isvalid=!this.isvalid;
  }
}
