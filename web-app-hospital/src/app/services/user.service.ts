import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.steinhq.com/v1/storages/63042ee2bc148508ba88f149/Página1';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de pacientes READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva o paciente no banco CREATE
  postUser(user: any) {
    return this.httpClient.post(this.apiUrl, user, this.httpOptions);
  }

  //Excluir o paciente no banco DELETE
  deleteUser(id: string) {
    return this.httpClient.delete<User[]>(`${this.apiUrl}?search={"id":"${[id]}"}`);
  }

  // Edita usuario UPDATE
  updateUser(id: string, user: User) {
    return this.httpClient.put(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`)
  }
}
