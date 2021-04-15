import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  itemClicked(): void {
    this.recipeService.selectedRecipe.emit(this.rec);
  }
}
