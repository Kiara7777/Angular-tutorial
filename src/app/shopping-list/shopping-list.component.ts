import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Ingredient name", 5),
    new Ingredient("Tomato", 5),
    new Ingredient("Apple", 10),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ingredientToArray(ingredient: Ingredient): void{
    this.ingredients.push(ingredient);
  }

}
