import { Component, OnInit } from '@angular/core';
import { windowWhen } from 'rxjs';
import { AccountService } from '../shared/account.service';
import { RequestLogin } from './model/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin = new RequestLogin();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    return this.accountService.login(this.requestLogin).subscribe({
      next: result => {
        this.requestLogin = result
        window.location.href = 'app-home'
      },
      error: (err: any) => {
        return console.error(err)
      }
    })
  }
}


  /* return this.accountService.login(this.requestLogin).subscribe({
      next: data => {
        console.log(data);

        if (this.requestLogin.email === "master@tindin.com.br" && this.requestLogin.password === "123") {
          this.requestLogin.sucesso = false;
          console.log("Result:  " + this.requestLogin.sucesso);
          return (`${this.requestLogin}`);
        } else {
          this.requestLogin.sucesso = true;
          console.log("Result:  " + this.requestLogin.sucesso);
          return (`${this.requestLogin}`);
        }

      }, error: err => {
        this.requestLogin.sucesso = true;
        console.log("Result:  " + this.requestLogin.sucesso);
        return (`${this.requestLogin}` + err);
        //error: err => console.log('Error', err)}
      },
    })*/
