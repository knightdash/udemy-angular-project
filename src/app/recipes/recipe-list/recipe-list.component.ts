import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://www.simplyrecipes.com/thmb/rngm-7eZfo-gsKuRWOceBMM9m_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simple a test',
      'https://www.simplyrecipes.com/thmb/rngm-7eZfo-gsKuRWOceBMM9m_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg'
    ),

  ];
  constructor() { }

  ngOnInit(): void {
      
  }
}