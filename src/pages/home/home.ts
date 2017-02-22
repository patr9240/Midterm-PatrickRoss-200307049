/*  home.ts
    Midterm
    Patrick Ross
    200307049
    */
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingListItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
  af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.shoppingListItems = af.database.list('/shoppingList');
  }
  
   /*updateItem
    This method activates a popup for the user
    to edit the details of a to-do list item*/
  minusItem(itemId, itemCount){
      if(itemCount >= 1){
        //itemCount = itemCount - 1;
      this.shoppingListItems.update(itemId, {
        itemCount: itemCount -1
      });
    }
    if(itemCount <= 0){
      this.shoppingListItems.update(itemId, {
        itemCount: 0
      });
    }
  }

  addItem(itemId, itemCount){
      this.shoppingListItems.update(itemId, {
        itemCount: itemCount + 1
      });
  }  
}
