import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private fb: FormBuilder) { 
    
   }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    }, (err) => {
      console.log('Erro ao Executar', err.status);
    })
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe(response => {
      console.log('Paciente Excluido');
    }, (err) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }

}
