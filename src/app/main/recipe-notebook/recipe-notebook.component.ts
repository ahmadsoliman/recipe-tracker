import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-recipe-notebook',
  templateUrl: './recipe-notebook.component.html',
  styleUrls: ['./recipe-notebook.component.scss'],
})
export class RecipeNotebookComponent implements OnInit {
  recipes = [
    new Recipe(
      '1',
      'Black Bean Salsa',
      'This is a wonderful salsa!! It is full of black beans, corn, tomatoes, and onion. I can never make enough when I have a party!! Chill 24 hours before serving if you have time!! Serve with tortilla chips.',
      4,
      [],
      [],
      []
    ),
    new Recipe(
      '2',
      'Roasted Cauliflower "Rice"',
      "Cauliflower rice is a great low-calorie dish to have in your arsenal especially if you are eating low-carb. Super low in carbs, yet such a satisfying dish you will forget it's made from a vegetable and not a grain. There are two reasons I opted for roasted riced cauliflower in place of sauteed: 1) more flavor and 2) better texture.",
      4.5,
      [],
      [],
      []
    ),
  ];

  selectedRecipe = Recipe.createNew();

  constructor() {}

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  saveRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
