import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test recipe", "DEscription Test", "https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_960_720.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
