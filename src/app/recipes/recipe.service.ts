import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
               'This is simply a test',
               'http://www.gharanarestaurant.com/wp-content/uploads/2014/06/north-indian-1024x549.jpg',
                [
                  new Ingredient('Meat',10),
                  new Ingredient('French Fries',20)
                ]),

    new Recipe('Another Test Recipe',
               'This is simply a test',
               'http://www.itsgoa.com/wp-content/uploads/2016/07/28vada-pav-1.jpg',
                [
                  new Ingredient('Buns',10),
                  new Ingredient('Meat',30),
                ])
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes () {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
