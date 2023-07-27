import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenData } from 'src/models/tokenData';
import { TokenService } from 'src/services/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tokenData: TokenData | any;

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenData = this.tokenService.getTokenData();
  }
  ngOnInit(): void {

    if (!this.tokenData) this.router.navigate(['login']);

  }
}
