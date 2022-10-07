import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/users';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de pacientes READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //Salva o paciente no banco CREATE
  postUser(user: User):Observable<User[]> {
    return this.httpClient.post<User[]>(this.apiUrl, user, this.httpOptions);
  }

  //Excluir o paciente no banco DELETE
  deleteUser(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete<User>(url);
  }

  //Edita usuario UPDATE
  updateUser(user: User):Observable<any> {
    return this.httpClient.put(this.apiUrl, user, this.httpOptions);
  }

  // Lista usuario unico
  getUser(id: number):Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<User>(url);
  }
}
