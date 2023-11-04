import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from 'src/app/models/Itask.interface';
import { ICagegory } from 'src/app/models/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {
  form!: FormGroup;
  categories:ICagegory[] = [];
  task: ITask = {};
  taskid: number = 0;

  //TODO
  showalert:boolean=false;
  messagealert:string="Error";
  classalert:string="";

  /**
   *
   */
  constructor(private _formBuilder: FormBuilder, 
    private _activatedRoute: ActivatedRoute, 
    private router: Router,
    private _taskService: TaskService,
    private _categoryService: CategoryService) {
    
  }

  ngOnInit() {
    this.getAllCategories();
    this.createForm();
    this.getTask();
  }

  getTask(){
    
    this._activatedRoute.params.subscribe(params=>{
      
      if (params['id']){
        this.taskid = params['id'];
        this._taskService.getTaskById(params['id']).subscribe((data: ITask) => {
          if (data) {
            this.task = data;
            this.setValuesForm();
          }         
        });

      }
    });
  }

  getAllCategories(){
    this._categoryService.getAllCategories().subscribe((data:any) => {
      if(data){
        this.categories = data;
      }
    });
  }

  setValuesForm() {
    this.form.setValue({
      name: this.task.name,
      categoryid: this.getCategoryid(),
      deadline: this.task.deadlineview??'',
      iscompleted: this.task.iscompleted??''
    });
  }

  createForm(){
    this.form = this._formBuilder.group({
      name: [this.task.name, [Validators.required, Validators.minLength(5)]],
      categoryid: [this.getCategoryid()],
      deadline: [this.task.deadlineview],
      iscompleted: [this.task.iscompleted]
    });
  }

  getCategoryid(){
    debugger;
    return this.task.category != null ? this.task.category.id: '';
  }

  controlValid(namecontrol: string) {
    return this.form.get(namecontrol)?.invalid && this.form.get(namecontrol)?.touched;
  }

  return() {
    this.router.navigate(['/tasklist']);
  }

  saveTask(){
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {

        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(controlInterno => controlInterno.markAllAsTouched())
        } else {
          control.markAllAsTouched();
        }
      });
    } else {
      //Map
      let task: ITask = {
        id: this.taskid,
        name: this.form.value['name'],
        categoryid : this.form.value['categoryid'] == '' ? null : this.form.value['categoryid'],
        deadline: this.form.value['deadline'] == '' ? null : this.form.value['deadline'],
        iscompleted: this.form.value['iscompleted'] == '' ? null : this.form.value['iscompleted']
      }; 
      this._taskService.updateTask(task).subscribe({
        next: (res)=>{  
          this.showAlert("Ok", "success");
        },
        error:(err)=> { 
          this.showAlert(err.message, "danger");
         }
     });

    }
  }

 

  showAlert(message:string, type:string){
    this.messagealert = message;
    this.showalert = true;
    this.classalert = `alert alert-${type} alert-dismissible`;
    setTimeout(() => {  this.showalert = false; }, 2000);
  }
}
