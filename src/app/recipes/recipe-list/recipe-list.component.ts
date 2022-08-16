import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe','This is a Test','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318'),
    new Recipe('A test recipe 2','This is a Test 2','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318'),
    new Recipe('A test recipe 3','This is a Test 3','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318'),
    new Recipe('A test recipe 4','This is a Test 4','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
