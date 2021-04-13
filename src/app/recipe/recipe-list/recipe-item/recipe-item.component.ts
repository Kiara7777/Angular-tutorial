import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() rec: Recipe;

  @Output() displayDetail = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  itemClicked(): void {
    this.displayDetail.emit(this.rec);
  }
}
