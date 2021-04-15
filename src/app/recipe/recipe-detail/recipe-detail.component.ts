import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  noRecipe: boolean = true;

  @Input() recipeDetail: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.recipeDetail) {
      this.noRecipe = false;
    }
  }

  ngOnInit(): void {}

  sendToShopList() {
    this.shoppingListService.passRecepiIngredients(
      this.recipeDetail.ingredients
    );
  }
}
