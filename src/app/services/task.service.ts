import { Injectable, Inject } from '@angular/core';
import { ITask } from '../models/Itask.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {

    pathservice: string = 'https://localhost:5001/api/v1/task';
    /**
     *
     */
    constructor(private _http: HttpClient) {
        debugger;
    }

    getAllTasks(){
        const tasks: ITask[] = [
            {
                id: 1,
                name: "Create",
                deadline: new Date(),
                iscompleted: true,
                userid: 50,
                username: "Juanita",
                categoryid: 3,
                categoryname: "Design"
            }
        ];

        return tasks;
    }

    createTask(task: ITask){
        debugger;

        return this._http.post(this.pathservice, task, {
            headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
          });
    }

  }