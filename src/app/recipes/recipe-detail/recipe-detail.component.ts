import { Recipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor( 
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void { }

  onAddToList() {
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }
}
