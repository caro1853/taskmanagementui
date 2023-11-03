import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
      PagesComponent,
      TaskCreateComponent,
      TaskUpdateComponent,
      TaskListComponent
    ],
    /*exports: [
      UserCreateComponent
    ],*/
    imports: [ 
      PAGES_ROUTES,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      RouterModule,
    ],
    providers: [],
    bootstrap: []
  })
  export class PagesModule { }