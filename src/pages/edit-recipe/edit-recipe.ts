import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { text } from '@angular/core/src/render3/instructions';


@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit{

  selectOptions = ['Easy','Medium','Hard'];
  mode = "New";
  recipeForm: FormGroup;

  constructor (private navParams: NavParams,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController) {}

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    this.initializeForm();
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

  onManageIngredients(){
    const actionSheet = this.actionSheetController.create({
      title: "What do you want todo?",
      buttons: [
        {
          text:'Add Ingridients',
          handler: () => {
            this.createNewIngredientsAlert().present();
          }
        },
        {
          text: 'Remove all ingredients',
          role:'destructive',
          handler: () => {

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  private createNewIngredientsAlert(){
    return this.alertCtrl.create({
      title: 'Add Ingredients',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            if(data.name.trim() == '' || data.name == null){
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients')).push(new FormControl(data.name, Validators.required));
          }
        }
      ]

    })
  }

  private initializeForm(){
    this.recipeForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'difficulty': new FormControl('Medium', Validators.required),
      'ingredients': new FormArray([])
    });
  }

}
