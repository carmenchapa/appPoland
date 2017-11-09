import { Component } from '@angular/core';

@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html'
})


export class CheckInPage {


	slides = [
    {
      title: "Paso 1",
      description: "Esta es la fachada del edificio, número 83, junto a la padadería.",
      image: "assets/imgs/slide-1.png",
    },
    {
      title: "Paso 2",
      description: "Entra en el recibidor...",
      image: "assets/imgs/slide-2.png",
    },
    {
      title: "Paso 3",
      description: "Abre la puerta...",
      image: "assets/imgs/slide-3.png",
    },
    {
      title: "Paso 4",
      description: "Disfruta de tu estancia...",
      image: "assets/imgs/slide-3.png",
    }
  ];
  constructor() {

  }
}
