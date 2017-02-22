/*  shopping-list.ts
    Midterm
    Patrick Ross
    200307049
    */
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the ShoppingList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html'
})
export class ShoppingListPage {
  
  listItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listItems = af.database.list('/shoppingList');
  }
}
