import { Injectable, Inject } from '@angular/core';
import { ITask } from '../models/Itask.interface';

@Injectable({
    providedIn: 'root'
  })
  export class TaskService {


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

  }