import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/Itask.interface';
import { ICagegory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[];
  categories:ICagegory[] = [];
  categoryselected:number = 0;
  /**
   *
   */
  constructor(private router: Router, private _taskService: TaskService,
    private _categoryService: CategoryService) {
    this.tasks = [];
  }

  ngOnInit(){
    this.getAllTasksByUser();
    this.getAllCategories();
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe((data:any) => {
      if(data){
        this.categories = data;
      }
    });
  }

  getAllTasksByUser(){
    this._taskService.getAllTasksByUser().subscribe((data:any) => {
      if(data){
        this.tasks = data;
      }
    });
  }

  filtrar(){
    if(this.categoryselected == 0){
      this.getAllTasksByUser();
    }
    else {
      this._taskService.getTasksByUserByCategory(this.categoryselected).subscribe((data:any) => {
        if(data){
          this.tasks = data;
        }
      });
    }
  }

  limpiarfiltro(){
    this.categoryselected = 0;
    this.filtrar();
  }

  redirectNewTask(){
    this.router.navigate(['/taskcreate']);
  }

  redirectUpdateTask(id:any){
    this.router.navigate(['/taskupdate', id]);
  }
}
