import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/Itask.interface';
import { ICagegory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  form!: FormGroup;
  categories:ICagegory[] = [];
  showalert:boolean=false;
  messagealert:string="Error";
  classalert:string="";
  
  constructor(private _formBuilder: FormBuilder, private router: Router, 
    private _taskService: TaskService,
    private _categoryService: CategoryService) {
    this.createForm();
  }

  ngOnInit(){
    this.getAllCategories();
  }

  createForm() {

    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      categoryid: [''],
      deadline: []
    });
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe((data:any) => {
      if(data){
        this.categories = data;
      }
    });
  }

  saveTask(){
    if(this.form.invalid){

        Object.values(this.form.controls).forEach(control => {
        
          if (control instanceof FormGroup) {
            Object.values(control.controls).forEach(controlInterno => controlInterno.markAllAsTouched())
          } else {
            control.markAllAsTouched();
          }
        });
      }
      else{
        //Map
        let task: ITask = {
          name: this.form.value['name'],
          deadline: this.form.value['deadline']??null
        };
        if(this.form.value['categoryid'] != ''){
          task.category = {
            id: this.form.value['categoryid']
          };
        }
        
        this._taskService.createTask(task).subscribe({
          next: (res)=>{  
            this.router.navigate(['/pages/tasklist']);
            this.showAlert("Ok", "success");
          },
          error:(err)=> { 
            this.showAlert(err.message, "danger");
           }
       });
      }

  }

  controlValid(namecontrol: string) {
    return this.form.get(namecontrol)?.invalid && this.form.get(namecontrol)?.touched;
  }

  return() {
    this.router.navigate(['/pages/tasklist']);
  }

  showAlert(message:string, type:string){
    this.messagealert = message;
    this.showalert = true;
    this.classalert = `alert alert-${type} alert-dismissible`;
    setTimeout(() => {  this.showalert = false; }, 2000);
  }
}
