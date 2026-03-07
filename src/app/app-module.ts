import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ReactiveFormsModule } from '@angular/forms';
import { Navbarcomponent } from './navbarcomponent/navbarcomponent';
import { Footercomponent } from './footercomponent/footercomponent';
import { Postscomponent } from './postscomponent/postscomponent';
import { FormsModule } from '@angular/forms';
import { UserData } from './user-data/user-data';
import { AddpostForm } from './addpost-form/addpost-form';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';

@NgModule({
  declarations: [
    App,
    Navbarcomponent,
    Footercomponent,
    Postscomponent,
    UserData,
    AddpostForm,
    Login,
    NotFound,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
