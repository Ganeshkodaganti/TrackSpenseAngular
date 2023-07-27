import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/models/login';
import { TokenData } from 'src/models/tokenData';
import { TokenService } from 'src/services/token/token.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  passwordVisible: boolean | undefined;
  tokenData: TokenData | any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.tokenData = this.tokenService.getTokenData();
  }
  ngOnInit(): void {
    if (this.tokenData) this.router.navigate(['']);
  }

  loginCredentials: LoginModel = {
    userName: '',
    password: '',
  };

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
  login() {
    console.log('login clicked');
    console.log(this.loginCredentials);
    this.http
      .post('https://localhost:7279/User/Login', this.loginCredentials, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          localStorage.setItem('JwtToken', response);
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }
}
