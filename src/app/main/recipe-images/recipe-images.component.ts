import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-images',
  templateUrl: './recipe-images.component.html',
  styleUrls: ['./recipe-images.component.scss'],
})
export class RecipeImagesComponent implements OnInit {
  @Input() images = [];
  constructor() {}

  ngOnInit(): void {}
}
