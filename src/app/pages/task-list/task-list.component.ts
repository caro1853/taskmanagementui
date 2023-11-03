import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/Itask.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[];
   
  /**
   *
   */
  constructor(private router: Router, private _taskService: TaskService) {
    this.tasks = [];
  }

  ngOnInit(){
    this.tasks = this._taskService.getAllTasks();
  }

  redirectNewTask(){
    this.router.navigate(['/taskcreate']);
  }

}
