import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenData } from 'src/models/tokenData';
import { TokenService } from 'src/services/token/token.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  tokenData: TokenData | any;
  transactions: any;

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    this.tokenData = await this.tokenService.getTokenData();
    this.getTransactions();
  }

  getTransactions() {
    this.http
      .get(
        `https://localhost:7279/Transaction/GetTransactions?UserId=${this.tokenData.Id}`
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.transactions = result;
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }
  deleteTransaction(transaction: any) {
    this.http
      .delete(
        `https://localhost:7279/Transaction/DeleteTransaction?transactionId=${transaction.transactionId}`
      )
      .subscribe(
        (result) => {
          console.log(result);
          this.getTransactions();
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }
}
