import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output('ingrediensAdded') ingrediensAdded = new EventEmitter<Ingredient>();  
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor() { }
  

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount =  this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    if(ingName && ingAmount)
    this.ingrediensAdded.emit(newIngredient);
  }

  onDelete() {

  }

  onClear() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = 0
  }
}
