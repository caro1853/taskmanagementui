import { Injectable } from '@angular/core';
import { ITask } from '../models/Itask.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {

    pathservice: string = 'http://localhost:5264/api/v1/task';
    
    constructor(private _http: HttpClient, private _loginService: LoginService) { 
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

    getTokenSaved() {
      if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
      } else {
        return '';
      }
    }
    

  }