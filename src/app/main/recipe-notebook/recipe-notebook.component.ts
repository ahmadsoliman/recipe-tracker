import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-recipe-notebook',
  templateUrl: './recipe-notebook.component.html',
  styleUrls: ['./recipe-notebook.component.scss'],
})
export class RecipeNotebookComponent implements OnInit {
  selectedRecipe = Recipe.createNew();

  constructor() {}

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
