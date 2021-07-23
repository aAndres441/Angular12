import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


interface Link {
  name: string;
  viewName: string;
  rating: number;
}

interface Data {
  text?: string;
  url?: string;
}

@Component({
  selector: 'app-fichero',
  templateUrl: './fichero.component.html',
  styleUrls: ['./fichero.component.scss']
})

export class FicheroComponent implements OnInit {

  /* Para Renderer2 */
  @ViewChild('imagen_render') myImagen: ElementRef | any;
  @ViewChild('texto_render') myTexto: ElementRef | any;

  img1 = 'https://lh3.googleusercontent.com/-4vrL90Io3-E/WfJq8Tv825I/AAAAAAABIrs/5JsgZDAAgokQd3CvsLRPx9KNA4srL5IoACHMYCw/buenos%2Bias%2B%2B%252822%2529_thumb?imgmax=800';
  img2 = 'http://data.whicdn.com/images/140289027/original.gif';
  img3 = 'https://media4.giphy.com/media/7zGxwnuatyWBnm8lrl/giphy.gif?cid=ecf05e47ykfbc8ely9m94os2jk7773i7nurvj63eoi184yj2&rid=giphy.gif&ct=g';


  links: Link[] = [
    { name: 'Alabama', viewName: 'Alabama', rating: 1 },
    { name: 'Alabama', viewName: 'Alabama', rating: 1 },
    { name: 'Alabama', viewName: 'Alabama', rating: 1 },
    { name: 'California', viewName: 'AlaCaliforniabama', rating: 31 },
    { name: 'Minnesota', viewName: 'Minnesota', rating: 21 },
    { name: 'Washington', viewName: 'Washington', rating: 33 },
    { name: 'New York', viewName: 'New York', rating: 8 },
    { name: 'Florida', viewName: 'Florida', rating: 5 },
    { name: 'Hawaii', viewName: 'Hawaii', rating: 24 }
  ];

  eventos: any = [];

  isColor = false;

  background: ThemePalette = undefined;
  backgroundColor: string = 'transparent';
  backgroundColor2: string = 'blue';

  dato!: Data;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.dato = {
      text: 'my gif',
      url: this.img1
    };
    console.log(this.myImagen);

  }

  showInfo(link: Link) {
    console.log(link);
  }
  save() {
    console.log('link');
  }
  undo() {
    console.log('link');
  }

  /* Cambiar style */
  toggleBackground() {
    this.isColor = !this.isColor;
    this.backgroundColor2 = this.backgroundColor2 ? 'blue' : 'yellow';
    //this.background = this.background ? undefined : 'primary';
  }

  /* @es para html  >  eltext.style.color = eltext.style.color?'green':'pink'; */
  /* @renderes2 lo mismo que getElement, pero es lo correcto */

  /* toggleConSelector */
  toggleConSelector() {
    const eltext: any = document.getElementById('textoRender');
    console.log('ID', eltext);

    if (eltext.style.color === 'white') {
      eltext.style.color = 'orange';
    } else {
      eltext.style.color = 'white';
    }
  }


  /* Render 2 */
  toggleRenderer2() {
    const asTexto = this.myTexto.nativeElement;
    console.log('Nativo ', asTexto);

    /* clase */
    this.renderer2.addClass(asTexto, 'claseParaRender');

    /* style */
    /* this.renderer2.setStyle(asTexto, 'color','yellow'); */
    this.isColor = !this.isColor;
    const asIma = this.myImagen.nativeElement;
    if (this.isColor) {
      this.renderer2.setAttribute(asIma, 'src', this.img2);
    } else {
      this.renderer2.setAttribute(asIma, 'src', this.img1);
    }
  }

  /* ***********************************************//// */

  /* @Subir archivos */


  capturarImagen(event: Event): any {
    console.log(event);
    console.log(event.target);
    let eve = event.target; this.eventos.push(eve);
    for (let i of this.eventos) {
      console.log(this.eventos, '*', i, '**', this.eventos.length);
    }

  }

  /* ****************************************** */
  addLink() {
    this.links.push({ name: 'Junio', viewName: 'Junio', rating: 14 });
  }

  /**
 * @title Tab group where the tab content is loaded lazily (when activated)
 */

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }


}
