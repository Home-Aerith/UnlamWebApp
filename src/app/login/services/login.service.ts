import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    return this.http.get(`http://localhost:61768/login/${user}/${password}`);
  }
}
