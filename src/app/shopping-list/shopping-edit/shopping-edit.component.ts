import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;

  @Output()getIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    this.getIngredient.emit(new Ingredient(this.inputName.nativeElement.value, this.inputAmount.nativeElement.value));
  }

}
