import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Recipe } from 'src/app/core/models';

@Component({
  selector: 'app-new-recipe-modal',
  templateUrl: './new-recipe-modal.component.html',
  styleUrls: ['./new-recipe-modal.component.scss'],
})
export class NewRecipeModalComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  opened = false;

  @Output() saveClicked = new EventEmitter<Recipe>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm(Recipe.createNew());
  }

  openModal() {
    this.buildForm(Recipe.createNew());
    this.opened = true;
  }

  closeModal() {
    this.opened = false;
  }

  buildForm(recipe: Recipe) {
    this.form = this.fb.group({
      title: [recipe.title, Validators.required],
      description: [recipe.title, Validators.required],
      rating: [recipe.rating],
      ingredients: [[]],
      cookingSteps: [[]],
      picturesUrls: [[]],
    });
  }

  save() {
    if (this.form.valid) {
      const recipe = this.form.value as Recipe;
      this.saveClicked.emit(recipe);
      this.closeModal();
    }
  }
}
