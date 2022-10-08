import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendFormComponent } from './pages/agends/agend-form/agend-form.component';
import { AgendListComponent } from './pages/agends/agend-list/agend-list.component';
import { AtendListComponent } from './pages/atend/atend-list/atend-list.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: UsersListComponent},
  { path: 'form', component: UserFormComponent},
  { path: 'form/:id', component: UserFormComponent},
  { path: 'agend', component: AgendListComponent},
  { path: 'atend', component: AtendListComponent},
  { path: 'form-agend', component: AgendFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
