import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeNotebookComponent } from './main/recipe-notebook/recipe-notebook.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, RecipeNotebookComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
