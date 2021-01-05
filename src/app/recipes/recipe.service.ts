import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',[
      new Ingredient('Meat',1),
      new Ingredient('French Fies', 20)
    ]),
    new Recipe('Another test recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Butter', 1)
    ])
  ];

  constructor(private slService: ShoppingListService  ) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }



  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe; 
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index:number ){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
