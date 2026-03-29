import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Postscomponent } from './postscomponent/postscomponent';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { AddpostForm } from './addpost-form/addpost-form';
import { authuserGuard } from './authuser-guard';
import { PostDetails } from './post-details/post-details';
import { UserProfile } from './user-profile/user-profile';
import { loginGuard } from './login-guard';

const routes: Routes = [
  { path: 'posts', component: Postscomponent },
  { path: 'login', component: Login, canActivate: [loginGuard] },
  { path: '', component: Login, canActivate: [loginGuard] },
  { path: 'addpost', component: AddpostForm, canActivate: [authuserGuard] },
  { path: '**', component: NotFound },
  { path: 'post/:id', component: PostDetails },
  { path: 'user/:id', component: UserProfile },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
