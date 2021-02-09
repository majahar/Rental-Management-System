import { Component } from '@angular/core';
import { data } from '../assets/catalog.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RMS';
  results : any;
  categories: any;
  subcategories: any;
  showCategory = false;
  showSubCategory = false;


  constructor() {
    results : Array;


   }

  ngOnInit(): void {
    this.results = data.locations;
    this.categories=[];

  }
  showCategories(branches){
    this.showCategory = true;
    this.showSubCategory =false;
   console.log(branches.categories);
    this.categories=[];
    this.categories=branches.categories;
 }
 showSubcategory(subcategories){
  this.showSubCategory =true;
  this.showCategory = false;
  this.subcategories=[];
  this.subcategories=subcategories;

}
back(){
  this.showSubCategory =false;
  this.showCategory = true;
}
}
