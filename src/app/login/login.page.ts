import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private menu: MenuController, private loginService: LoginService) {
    this.menu.enable(false);
   }

  ngOnInit() {
  }

  login() {
    console.log('El username es: ', this.username);
    console.log('El password es: ', this.password);
    this.loginService.login(this.username, this.password).subscribe(res => {
      console.log('La respuesta fue: ', res);
    });

    console.log('Llega aca');
  }
}
