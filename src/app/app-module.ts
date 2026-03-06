import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Navbarcomponent } from './navbarcomponent/navbarcomponent';
import { Footercomponent } from './footercomponent/footercomponent';
import { Postscomponent } from './postscomponent/postscomponent';
import { FormsModule } from '@angular/forms';
import { UserData } from './user-data/user-data';

@NgModule({
  declarations: [App, Navbarcomponent, Footercomponent, Postscomponent, UserData],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
