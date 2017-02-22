/*  home.ts
    Midterm
    Patrick Ross
    200307049
    */
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  public actionSheetCtrl: ActionSheetController) {
  }
}
