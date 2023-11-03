import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskListComponent } from './task-list/task-list.component';

const pagesRoutes: Routes = [
    {
      path: '', component: PagesComponent,
      children: [
        { path: 'taskcreate', component: TaskCreateComponent, data: { titulo: 'Creación de tareas' }/*, canActivate: [AuthGuard]*/ },
        { path: 'taskupdate', component: TaskUpdateComponent, data: { titulo: 'Actualización de tareas' } },
        { path: 'tasklist', component: TaskListComponent, data: { titulo: 'Tareas disponibles' } },
        { path: '', redirectTo: '/tasklist', pathMatch: 'full' }      
      ]
    }
  ];
  
  export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);