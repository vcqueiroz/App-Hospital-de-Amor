import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/cb63a68c-c049-48b9-8b3f-97cc43bbec2d';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de pacientes READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva o paciente no banco CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }
}
