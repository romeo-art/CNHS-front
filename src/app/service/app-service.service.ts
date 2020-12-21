import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8000/api/user";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  register(userdata): Observable<any> {
    return this.http.post((baseUrl + "/register"), userdata);
  }

  login(emailPassword): Observable<any> {
    return this.http.post((baseUrl + "/login"), emailPassword);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }
}
