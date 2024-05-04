import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem('token');
    }
    return null;
  }

  isLoggerIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if (userInfo.email === 'admin@admin.ru' && userInfo.password === 'Admin12@') {
      this.setToken('dfgdrfggdfghjghjg')
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }
}
