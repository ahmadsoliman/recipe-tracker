import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeNotebookComponent } from './main/recipe-notebook/recipe-notebook.component';
import { RecipeListComponent } from './main/recipe-list/recipe-list.component';
import { RecipeComponent } from './main/recipe/recipe.component';
import { HeaderComponent } from './main/header/header.component';
import { RecipeListItemComponent } from './main/recipe-list-item/recipe-list-item.component';
import { NewRecipeModalComponent } from './main/new-recipe-modal/new-recipe-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeNotebookComponent,
    RecipeListComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListItemComponent,
    NewRecipeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
