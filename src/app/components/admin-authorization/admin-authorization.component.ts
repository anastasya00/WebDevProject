import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-admin-authorization',
  templateUrl: './admin-authorization.component.html',
  styleUrls: ['./admin-authorization.component.css']
})
export class AdminAuthorizationComponent {
  hide = true;
  loginForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (loginStatus) => {
          if (loginStatus) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['admin-authorization']);
          }
        },
        error: (err) => {
          alert(err.message);
          return throwError(() => new Error('Failed Login'));
        }
      });
    }
  }
}
