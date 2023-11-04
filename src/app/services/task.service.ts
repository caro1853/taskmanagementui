import { Injectable } from '@angular/core';
import { ITask } from '../models/Itask.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {

    pathservice: string = 'http://localhost:5264/api/v1/task';
    /**
     *
     */
    constructor(private _http: HttpClient) {
        
    }

    getAllTasksByUser(){
      //TODO
      debugger;
      const userid:number = 58;
      const path = `${this.pathservice}/gettasksbyuser/${userid}`;
      return this._http.get(path);
    }

    getTasksByUserByCategory(categoryid:number){
      //TODO
      const userid:number = 58;
      const path = `${this.pathservice}/gettasksbyuser/${userid}/category/${categoryid}`;
      return this._http.get(path);
    }

    getTaskById(id:number){
      const path = `${this.pathservice}/${id}`;
      return this._http.get(path);
    }

    createTask(task: ITask){
        task.userid = 58;
        return this._http.post(this.pathservice, task, {
            headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
          });
    }

    updateTask(task: ITask){

      return this._http.put(this.pathservice, task, {
          headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
        });
  }

  }