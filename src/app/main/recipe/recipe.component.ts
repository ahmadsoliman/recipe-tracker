import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  isSelected = false;

  private _recipe = Recipe.createNew();
  get recipe() {
    return this._recipe;
  }
  @Input() set recipe(value: Recipe) {
    if (value.title.length > 0) {
      this._recipe = value;
      this.isSelected = true;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
