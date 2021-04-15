import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsUpdate = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Ingredient name', 5),
    new Ingredient('Tomato', 5),
    new Ingredient('Apple', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  ingredientToArray(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsUpdate.emit(this.ingredients.slice());
  }

  passRecepiIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsUpdate.emit(this.ingredients.slice());
  }
}
