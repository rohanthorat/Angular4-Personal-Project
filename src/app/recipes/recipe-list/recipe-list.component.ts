import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'we are on for testing', 'https://cdn.pixabay.com/photo/2017/07/02/12/10/salad-2464296_1280.jpg'),
    new Recipe('Another test recipe', 'we are on for testing', 'https://cdn.pixabay.com/photo/2017/07/02/12/10/salad-2464296_1280.jpg')

  ];


  //constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
