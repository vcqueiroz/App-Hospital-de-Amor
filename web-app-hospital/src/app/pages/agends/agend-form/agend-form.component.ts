import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agend-form',
  templateUrl: './agend-form.component.html',
  styleUrls: ['./agend-form.component.css']
})
export class AgendFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) { 
    this.userForm = this.fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      telefone: '',
      cidade: ''
    })
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
