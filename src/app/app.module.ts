import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ReservaPage } from '../pages/reserva/reserva';
import { ViajePage } from '../pages/viaje/viaje';
import { GetReadyPage } from '../pages/get-ready/get-ready';
import { CheckInPage } from '../pages/check-in/check-in';
import { StayPage } from '../pages/stay/stay';
import { CheckOutPage } from '../pages/check-out/check-out';

//
import { SliderTestPage } from '../pages/slider-test/slider-test';
//


import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ReservaPage,
    ViajePage,
    GetReadyPage,
    CheckInPage,
    StayPage,
    CheckOutPage,

    // SliderTestPage,

    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: "md"
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ReservaPage,
    ViajePage,
    GetReadyPage,
    CheckInPage,
    StayPage,
    CheckOutPage,
    
    // SliderTestPage,

    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
