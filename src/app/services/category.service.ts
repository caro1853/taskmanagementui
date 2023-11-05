import { Injectable } from '@angular/core';
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
}