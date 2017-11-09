import { NavController } from 'ionic-angular/index';
import { Component, ViewChild } from "@angular/core";


@Component({
//   template:`
// <ion-content class="has-header">
//       <ion-slides  [options]="_options" #mySlider>
//         <ion-slide *ngFor="let testSlide of testSlides">
//           <img src="http://placehold.it/150x150">
//           </ion-slide>
//       </ion-slides>
//       <div class="swiper-button-next"></div>
//       <div class="swiper-button-prev"></div>
// </ion-content>
// `
})
export class SliderTestPage {
  
  greeting: string;
  testSlides: string[] = [];
  @ViewChild('mySlider') mySlider: any;

  constructor(private nav: NavController) {
    
    this._options = {
	    slidesPerView:3,
	    pager: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",	    
	    onInit:()=>{
	    }
	 }
  setTimeout(()=>{
	    for (var i=1; i<6; i++) {
		    this.testSlides.push("Slide - "+i);
		  }
   },100);

	}
}