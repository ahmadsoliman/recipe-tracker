import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNotebookComponent } from './recipe-notebook.component';

describe('RecipeNotebookComponent', () => {
  let component: RecipeNotebookComponent;
  let fixture: ComponentFixture<RecipeNotebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNotebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
