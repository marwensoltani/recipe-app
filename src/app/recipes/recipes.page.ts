import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    console.log('Recipes Page on Init');
  }

  ngOnDestroy(){
    console.log('Recipes Page on Destroy');
  }

  ionViewWillEnter(){
    this.recipes=this.recipeService.getAllRecipes();
    console.log('Recipes Page Will Enter');
  }

  ionViewDidEnter(){
    console.log('Recipes Page Did Enter');
  }

  ionViewWillLeave(){
    console.log('Recipes Page Will Leave');
  }

  ionViewDidLeave(){
    console.log('Recipes Page Did Leave');
  }

}
