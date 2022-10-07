import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
      {id: 2, nome: 'João', sobrenome: 'Mario', idade: 35, telefone: '(15)99799-9999', cidade: 'São Carlos'},
      {id: 3, nome: 'Pedro', sobrenome: 'Messias', idade: 52, telefone: '(15)99799-9999', cidade: 'Capão Bonito'},
      {id: 4, nome: 'Marcio', sobrenome: 'Dacosta', idade: 44, telefone: '(15)99799-9999', cidade: 'Pilar do Sul'},
      {id: 5, nome: 'Thiago', sobrenome: 'Nunes', idade: 39, telefone: '(15)99799-9999', cidade: 'Tatuí'},
      {id: 6, nome: 'Jandrei', sobrenome: 'Oliveira', idade: 38, telefone: '(15)99799-9999', cidade: 'São Paulo'},
    ];
    return {users};
  }
  /*genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 6;
  }  

  constructor() { }*/
}
