import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes = [
    new Recipe(
      'Black Bean Salsa',
      'This is a wonderful salsa!! It is full of black beans, corn, tomatoes, and onion. I can never make enough when I have a party!! Chill 24 hours before serving if you have time!! Serve with tortilla chips.',
      4,
      [],
      [],
      []
    ),
    new Recipe(
      'Roasted Cauliflower "Rice"',
      "Cauliflower rice is a great low-calorie dish to have in your arsenal especially if you are eating low-carb. Super low in carbs, yet such a satisfying dish you will forget it's made from a vegetable and not a grain. There are two reasons I opted for roasted riced cauliflower in place of sauteed: 1) more flavor and 2) better texture.",
      4.5,
      [],
      [],
      []
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
