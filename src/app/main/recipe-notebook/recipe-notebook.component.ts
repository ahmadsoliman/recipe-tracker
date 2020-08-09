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
      [
        '3 (15 ounce) cans black beans, drained and rinsed',
        '1 (11 ounce) can Mexican-style corn, drained',
        '2 (10 ounce) cans diced tomatoes with green chile peppers, partially drained',
      ],
      [
        'In a large bowl, mix together black beans, Mexican-style corn, diced tomatoes with green chile peppers, tomatoes and green onion stalks.',
        'Garnish with desired amount of cilantro leaves.',
        'Chill in the refrigerator at least 8 hours, or overnight, before serving.',
      ],
      [
        'assets/images/blackbean1.jpg',
        'assets/images/blackbean2.webp',
        'assets/images/blackbean3.webp',
      ]
    ),
    new Recipe(
      '2',
      'Roasted Cauliflower "Rice"',
      "Cauliflower rice is a great low-calorie dish to have in your arsenal especially if you are eating low-carb. Super low in carbs, yet such a satisfying dish you will forget it's made from a vegetable and not a grain. There are two reasons I opted for roasted riced cauliflower in place of sauteed.",
      4.5,
      [
        'cooking spray',
        '2 heads cauliflower',
        '1 1/2 tablespoons avocado oil',
        '3/4 teaspoon salt',
      ],
      [
        'Preheat oven to 450 degrees F (230 degrees C). Line 3 baking sheets with aluminum foil and lightly spray with cooking spray.',
        'Fill a food processor 1/4 of the way with cauliflower pieces. Pulse 8 to 12 times until cauliflower is the size of rice grains. Transfer to a large bowl. Repeat with remaining cauliflower pieces.',
        'Drizzle avocado oil over cauliflower "rice"; toss until well-distributed.',
        'Spread 2 1/2 cups of the rice in an even layer on each lined baking sheet.',
        'Roast rice until golden, about 16 minutes. Remove from oven, stir well, and spread out again. Return to oven and roast for 6 minutes. Remove from oven, stir well, and spread out again. Continue roasting until browned, about 5 minutes more.',
        'Season each sheet of roasted rice with 1/4 teaspoon salt and place in a large container.',
      ],
      [
        'assets/images/cauliflower1.jpg',
        'assets/images/cauliflower2.jpg',
        'assets/images/cauliflower3.jpg',
      ]
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
