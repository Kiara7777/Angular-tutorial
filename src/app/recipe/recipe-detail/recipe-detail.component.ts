import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {

  noRecipe: boolean = true;

  @Input() recipeDetail: Recipe;

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(this.recipeDetail){
      this.noRecipe = false;
    }

  }

  ngOnInit(): void {
  }

}
