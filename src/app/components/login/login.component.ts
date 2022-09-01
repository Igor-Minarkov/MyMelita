import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: any = FormGroup;
  loginInfo: object = {};
  token: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  loginSubmit(data: any) {
    if (this.login.valid) {
      this.loading = true;
      this.loginInfo = this.login.value;
      this.authService.loginInfo(this.login.value).subscribe((result) => {
        localStorage.setItem('token', result.authToken);
        this.router.navigate(['home']);
        this.loading = false;
      });
    }
  }
}
