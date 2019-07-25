import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit{

  selectOptions = ['Easy','Medium','Hard'];
  mode = "New";

  constructor (private navParams: NavParams) {}

  ngOnInit(){
    this.mode = this.navParams.get('mode');
  }

}
