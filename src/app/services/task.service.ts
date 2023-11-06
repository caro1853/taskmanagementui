import { Injectable } from '@angular/core';
import { ITask } from '../models/Itask.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginService } from './login.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {

    controller: string = 'task';
    pathservice: string = '';
    
    constructor(private _http: HttpClient, private _loginService: LoginService) { 
      this.pathservice = `${environment.baseURLmanagementAPI}/${this.controller}`;
      console.log({pathservice: this.pathservice});
    }

    getAllTasksByUser(){
      const token = this.getTokenSaved();
      const userid:number = this._loginService.getUserId();
      const path = `${this.pathservice}/gettasksbyuser/${userid}`;
      return this._http.get(path, {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
      });
    }

    getTasksByUserByCategory(categoryid:number){
      const token = this.getTokenSaved();
      const userid:number = this._loginService.getUserId();
      const path = `${this.pathservice}/gettasksbyuser/${userid}/category/${categoryid}`;
      return this._http.get(path, {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
      });
    }

    getTaskById(id:number){
      const token = this.getTokenSaved();
      const path = `${this.pathservice}/${id}`;
      return this._http.get(path, {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
      });
    }

    createTask(task: ITask){
        const userid: number = this._loginService.getUserId();
        task.userid = userid;
        const token = this.getTokenSaved();
        return this._http.post(this.pathservice, task, {
          headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
        });
    }

    updateTask(task: ITask){
      const token = this.getTokenSaved();
      return this._http.put(this.pathservice, task, {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
      });
    }

    deleteTaskById(id:number){
      const token = this.getTokenSaved();
      const path = `${this.pathservice}/${id}`;
      return this._http.delete(path, {
        headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
      });
    }

    getTokenSaved() {
      if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
      } else {
        return '';
      }
    }
    

  }