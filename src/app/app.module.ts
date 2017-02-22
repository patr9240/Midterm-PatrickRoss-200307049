/*  app.module.ts
    Midterm
    Patrick Ross
    200307049
    */

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDQJD1FfjbTJ-UZ8YDLeWMiKW9ZmOcFhpw",
    authDomain: "midtermexam-ce789.firebaseapp.com",
    databaseURL: "https://midtermexam-ce789.firebaseio.com",
    storageBucket: "midtermexam-ce789.appspot.com",
    messagingSenderId: "1033428849052"
  };

  

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
