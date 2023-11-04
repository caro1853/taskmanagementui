import { Injectable } from '@angular/core';
import { ICagegory } from '../models/category.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class CategoryService {
    pathservice: string = 'http://localhost:5264/api/v1/category';


    constructor(private _http: HttpClient) {
    }

    getAllCategories(){
        return this._http.get(this.pathservice);
    }

    /*getAllCategories(){
        const categories: ICagegory[] = [
            {
                id: 1,
                name: "Category 1"
            },
            {
                id: 2,
                name: "Category 2"
            },
            {
                id: 3,
                name: "Category 3"
            },
            {
                id: 4,
                name: "Category 4"
            },
            {
                id: 5,
                name: "Category 5"
            },
            {
                id: 6,
                name: "Category 6"
            },
            {
                id: 7,
                name: "Category 7"
            },
            {
                id: 8,
                name: "Category 8"
            }
        ];
        return categories;
    }*/
}