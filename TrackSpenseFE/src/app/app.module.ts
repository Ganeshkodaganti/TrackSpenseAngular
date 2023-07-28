import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    NavbarComponent,
    RegisterpageComponent,
    HomeComponent,
    TransactionsComponent,
    CategoriesComponent,
    AddCategoryComponent,
    AddTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginpageComponent },
      { path: 'register', component: RegisterpageComponent },
      { path: 'add-transaction', component: AddTransactionComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'categories', component: CategoriesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
