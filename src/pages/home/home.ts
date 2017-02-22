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
  
   /*minusItemCount
    This method reduces the selected items count by 1 if it is greater than 0*/
  minusItemCount(itemId, itemCount){
      if(itemCount >= 1){
      this.shoppingListItems.update(itemId, {
        itemCount: itemCount - 1
      });
    }
    if(itemCount <= 0){
      this.shoppingListItems.update(itemId, {
        itemCount: 0
      });
    }
  }
  /*addItemCount
    This method icreases the selected items count by 1*/
  addItemCount(itemId, itemCount){
      this.shoppingListItems.update(itemId, {
        itemCount: itemCount + 1
      });
  }

   /*addItem
    This method activates a popup for the user 
    to create a new item in the shopping list*/
  addItem(){    
    let prompt = this.alertCtrl.create({
    title: 'Shopping List Item',
    message: "Add a new item.",
    inputs: [
      {
        name: 'item',
        placeholder: 'Item'
      },
      {
        name: 'itemCount',
        placeholder: `0`
      }
    ],
    buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Save',
         handler: data => {
           this.shoppingListItems.push({
             item: data.item,
             itemCount: parseInt(data.itemCount)
           });
         }
       }
     ]
   });
   prompt.present();
  }  
  /*removeItem
    This method removes the selected item from the list*/
  removeItem(itemId: string){
    this.shoppingListItems.remove(itemId);
  }
}
