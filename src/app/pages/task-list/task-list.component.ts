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

  showalert:boolean=false;
  messagealert:string="Error";
  classalert:string="";
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
    this._taskService.getAllTasksByUser().subscribe({
      next: (data:any) => {
        if(data){
          this.tasks = data;
        }
      },
      error: (err) => {
        if(err?.status == 401){
          this.showAlert('Usuario No autorizado', 'danger', true);
        }
        debugger;
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
    this.router.navigate(['/pages/taskcreate']);
  }

  redirectUpdateTask(id:any){
    this.router.navigate(['/pages/taskupdate', id]);
  }

  showAlert(message:string, type:string, redirectLogin:boolean = false){
    this.messagealert = message;
    this.showalert = true;
    this.classalert = `alert alert-${type} alert-dismissible`;
    setTimeout(() => {  
      this.showalert = false;
      if(redirectLogin == true){
        this.router.navigate(['/auth/login']);
      }
    }, 3000);
  }
}
