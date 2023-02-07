import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simple a test',
      'https://www.simplyrecipes.com/thmb/rngm-7eZfo-gsKuRWOceBMM9m_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simple a test',
      'https://www.simplyrecipes.com/thmb/rngm-7eZfo-gsKuRWOceBMM9m_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}