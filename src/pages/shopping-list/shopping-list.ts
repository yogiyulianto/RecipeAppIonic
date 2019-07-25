import { ShoppingListService } from './../../services/shopping-lists';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Ingredients } from '../../models/ingredients';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredients[];

  constructor(private slService: ShoppingListService) {}

 onAddItem(form: NgForm){
   this.slService.addItem(form.value.ingredientName, form.value.amount);
   form.reset();
   this.loadItems();
 }

 ionViewWillEnter(){
  this.loadItems();
 }

 private loadItems(){
   this.listItems = this.slService.getItems();
 }

}
