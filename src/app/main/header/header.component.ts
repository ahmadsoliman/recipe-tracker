import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() recipeSaved = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  saveRecipe(recipe: Recipe) {
    this.recipeSaved.emit(recipe);
  }
}
