import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class LoginService {
    controller: string = 'login';
    pathservice: string = '';
    isTokenValid: boolean = false;

    /**
     *
     */
    constructor(private _http: HttpClient) {
      this.pathservice = `${environment.baseURLmanagementAPI}/${this.controller}`;
      console.log({pathservice: this.pathservice});
    }

    validateUser(email: string, password: string){
        this.isTokenValid = false;
        const path = `${this.pathservice}/token`;
        return this._http.post(path, { email, password })
        .pipe(
            map((res: any) => {
            if (res?.value?.token) {
                localStorage.setItem('token', res?.value?.token);
                this.isTokenValid = true;
                return true;
            }
            return false;

            })
        );
    }

    getTokenSaved() {
        if (localStorage.getItem('token')) {
          return localStorage.getItem('token');
        } else {
          return '';
        }
      }

    getUserId(){
        let token = this.getTokenSaved();
        let userid = 0;
        if(token){
            let infoToken = this.decodeToken(token);  
            userid = infoToken['userid'];
        }
        return userid;
    }

    closeSesion() {
      localStorage.removeItem('token');
      this.isTokenValid = false;
    }

    decodeToken(token: string) {
        if (token === null || token === '') { return { 'upn': '' }; }
        const parts = token.split('.');
        if (parts.length !== 3) {
    
          throw new Error('JWT must have 3 parts');
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
          throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    }
    
    private urlBase64Decode(str: string) {
        let output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
          case 0:
            break;
          case 2:
            output += '==';
            break;
          case 3:
            output += '=';
            break;
          default:
            // tslint:disable-next-line:no-string-throw
            throw 'Illegal base64url string!';
        }
        return decodeURIComponent((<any>window).escape(window.atob(output)));
      }
} 