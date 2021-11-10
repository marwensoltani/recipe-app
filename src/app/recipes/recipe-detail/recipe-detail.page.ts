import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit , OnDestroy{
  loadedRecipe: Recipe;
  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private alertCtrl: AlertController) { }


  ngOnInit() {
    console.log('Recipe Detail Page on Init');
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['/recipes']);
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure ?',
      message: 'Do you really want to delete the recipe ?',
      buttons: [
        {
          text:'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipeService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertElm => alertElm.present());
  }

  ngOnDestroy(): void {
    console.log('Recipe Detail Page on Destroy');
  }

  ionViewWillEnter(){
    console.log('Recipe Detail Page Will Enter');
  }

  ionViewDidEnter(){
    console.log('Recipe Detail Page Did Enter');
  }

  ionViewWillLeave(){
    console.log('Recipe Detail Page Will Leave');
  }

  ionViewDidLeave(){
    console.log('Recipe Detail Page Did Leave');
  }
}
