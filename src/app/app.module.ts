import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([  
      { 
        path: 'pages', 
        loadChildren: () => import('./pages/pages.module').then(m=> m.PagesModule)
      },  
      {
        path: 'auth',
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      },      
      { path: '**', redirectTo: 'auth', pathMatch: 'full' }
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
