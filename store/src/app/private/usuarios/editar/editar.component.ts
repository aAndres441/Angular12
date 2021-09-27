import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ver360();
  }


  /* Muestra imagen girando 360*/
  ver360(): void {
    const image: any = document.getElementById('imagen');
    const range: any = document.getElementById('rango');
    const arrayImages: any = [];

    for (let i = 0; i < 39; i++) {
      arrayImages.push(`assets/imgPau/pau_ ${i}.jpg`)
      console.log(`assets/imgPau/pau_ ${i}.jpg`);
      
    }

    image.setAttribute('src', arrayImages[1]);

    range.addEventListener('input', (e: any) => {
      let valor = e.target.value;
      image.setAttribute('src', arrayImages[valor]);
    })

    console.log('imag', arrayImages);
  }

}
