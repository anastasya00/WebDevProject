import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => this.router.navigate(['admin']),
        error: (err) => alert(err.message)
      });
    }
  }
}
