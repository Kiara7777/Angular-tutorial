import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';
import { Recipe } from '../shared/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'DEscription Test',
      'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
      [
        new Ingredient("JEdna", 4),
        new Ingredient("Druha", 9),
        new Ingredient("Treti", 40)
      ]
    ),
    new Recipe(
      'Test recipe 2 ',
      'DEscription Test 2',
      'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg',
      [
        new Ingredient("Neco dalsiho", 12),
        new Ingredient("Posledni", 42)
      ]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
