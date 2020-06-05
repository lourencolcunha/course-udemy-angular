import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pastry', 'Recipe for pastry', 'https://bakingamoment.com/wp-content/uploads/2018/09/IMG_9883-easy-homemade-puff-pastry-recipe-square-720x720.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
