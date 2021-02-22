import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit(): void { }

  hide = true;

  utilizador = {
    email: null,
    password: null
  }
 
  entrar: boolean = false;

  onSubmit = (form: any) => {
    this.service.redireciona();
  }
}
