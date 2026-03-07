import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Postscomponent } from './postscomponent/postscomponent';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { AddpostForm } from './addpost-form/addpost-form';
import { authuserGuard } from './authuser-guard';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'posts', component: Postscomponent, canActivate: [authuserGuard] },
  { path: '', component: Login },
  { path: 'addpost', component: AddpostForm, canActivate: [authuserGuard] },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
