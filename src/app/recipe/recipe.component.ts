import { Component } from '@angular/core';
import { Recipe } from '../shared/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  recipeDetail: Recipe;

  passDetail(rec: Recipe): void {
    if (rec) {
      this.recipeDetail = rec;
    }
  }
}
