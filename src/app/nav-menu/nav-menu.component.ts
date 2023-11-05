import { Component } from '@angular/core';
//import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor(private _router: Router, private _loginService: LoginService) {
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  exitSesion() {
    this._loginService.closeSesion();
    this._router.navigate(['/auth/login']);
  }
}
