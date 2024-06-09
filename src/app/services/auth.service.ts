import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, catchError, of, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(JwtHelperService) private jwtHelper: JwtHelperService
  ) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  
  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  login(userInfo: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/login', userInfo)
      .pipe(
        map((response: any) => {
          console.log("LOGIN STATUS: ", response.status)
  
          if (response.status === 'OK') {
            this.setToken(response.access_token);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(){
    this.router.navigate(['admin-authorization'])
  }

}
