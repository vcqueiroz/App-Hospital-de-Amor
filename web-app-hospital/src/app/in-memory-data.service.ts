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
      {id: 2, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
      {id: 3, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
      {id: 4, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
      {id: 5, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
      {id: 6, nome: 'Vanderlei', sobrenome: 'Queiroz', idade: 29, telefone: '(15)99799-9999', cidade: 'Itapetininga'},
    ];
    return {users};
  }

  constructor() { }
}
