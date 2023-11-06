import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
  })
export class CategoryService {
    controller: string = 'category';
    pathservice: string = '';

    constructor(private _http: HttpClient) {
        this.pathservice = `${environment.baseURLmanagementAPI}/${this.controller}`;
        console.log({pathservice: this.pathservice});
    }

    getAllCategories(){
        return this._http.get(this.pathservice);
    }
}