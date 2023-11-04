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
    this.getAllTasksByUser();
    //this.getAllTaskHard();
  }

  getAllTasksByUser(){
    this._taskService.getAllTasksByUser().subscribe((data:any) => {
      if(data){
        this.tasks = data;
      }
      debugger;
    });
  }

  redirectNewTask(){
    this.router.navigate(['/taskcreate']);
  }

  redirectUpdateTask(id:any){
    this.router.navigate(['/taskupdate', id]);
  }

  getAllTaskHard(){
    this.tasks = [
            {
                id: 1,
                name: "Create",
                deadline: new Date(),
                iscompleted: true,
                userid: 50,
                username: "Juanita",
                categoryid: 3,
                categoryname: "Design"
            },
            {
              id: 1,
              name: "Create",
              deadline: new Date(),
              iscompleted: true,
              userid: 50,
              username: "Juanita",
              categoryid: 3,
              categoryname: "Design"
          },
          {
            id: 1,
            name: "Create",
            deadline: new Date(),
            iscompleted: true,
            userid: 50,
            username: "Juanita",
            categoryid: 3,
            categoryname: "Design"
        },
        {
          id: 1,
          name: "Create",
          deadline: new Date(),
          iscompleted: true,
          userid: 50,
          username: "Juanita",
          categoryid: 3,
          categoryname: "Design"
      },
      {
        id: 1,
        name: "Create",
        deadline: new Date(),
        iscompleted: true,
        userid: 50,
        username: "Juanita",
        categoryid: 3,
        categoryname: "Design"
    },
    {
      id: 1,
      name: "Create",
      deadline: new Date(),
      iscompleted: true,
      userid: 50,
      username: "Juanita",
      categoryid: 3,
      categoryname: "Design"
  },
  {
    id: 1,
    name: "Create",
    deadline: new Date(),
    iscompleted: true,
    userid: 50,
    username: "Juanita",
    categoryid: 3,
    categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
{
  id: 1,
  name: "Create",
  deadline: new Date(),
  iscompleted: true,
  userid: 50,
  username: "Juanita",
  categoryid: 3,
  categoryname: "Design"
},
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
  }

  

}
