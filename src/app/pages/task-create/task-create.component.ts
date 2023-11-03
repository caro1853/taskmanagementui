import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITask } from 'src/app/models/Itask.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  form!: FormGroup;

  
  constructor(private _formBuilder: FormBuilder, private router: Router, 
    private _taskService: TaskService) {
    this.createForm();
  }

  createForm() {

    this.form = this._formBuilder.group({
      name: ['', [Validators.required]]
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
        const task: ITask = {
          name: this.form.value['name']
        };      
        this._taskService.createTask(task).subscribe(res=>{
          debugger;
        });
      }

  }

  controlValid(namecontrol: string) {
    //return this.form.get(namecontrol)?.invalid && this.form.get(namecontrol)?.touched;
  }

  return() {
    this.router.navigate(['/tasklist']);
  }
}
