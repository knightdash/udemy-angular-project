import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() id: number;
  // @Output() recipeSelected = new EventEmitter<Recipe>();  //service deer nemsen 

  constructor(private recipeService: RecipeService) { }

  onSelectedRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
