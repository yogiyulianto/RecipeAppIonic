import { Ingredients } from "../models/ingredients";

export class ShoppingListService{
  private ingredients:Ingredients[] = [];

  addItem(name: string, amount: number){
    this.ingredients.push(new Ingredients(name, amount));
    console.log(this.ingredients);
  }

  addItems(items: Ingredients[]){
    this.ingredients.push(...items);
  }

  getItems(){
    return this.ingredients.slice();
  }

  removeItems(index: number){
    this.ingredients.splice(index, 1);
  }
}
