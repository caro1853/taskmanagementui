import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email11 = '';
  password11 = '';

  showalert:boolean=false;
  messagealert:string="Error";
  classalert:string="";

  /**
   *
   */
  constructor(private _router: Router,private _loginService: LoginService) {
  }

  onSigin(formulario: NgForm) {
    if(this.email11 == '' || this.password11 == ''){
      this.showAlert('El correo y la contraseña son necesarios', 'warning');
    }
    else{
      this._loginService.validateUser(this.email11, this.password11).subscribe({
        next: (res) => {
          if(res ==  true){
            this._router.navigate(['/pages/tasklist']);
          }
          else{
            this.showAlert('Usuario o contraseña incorrectos', 'warning');
          }
        },
        error: (err) => {
          this.showAlert(err.message, 'danger');
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
