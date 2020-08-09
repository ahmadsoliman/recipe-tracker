import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeNotebookComponent } from './main/recipe-notebook/recipe-notebook.component';

const routes: Routes = [
  {
    path: 'recipe-notebook',
    component: RecipeNotebookComponent,
  },
  {
    path: '',
    redirectTo: '/recipe-notebook',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
