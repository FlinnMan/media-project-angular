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
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { PostDetails } from './post-details/post-details';
import { UserProfile } from './user-profile/user-profile';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { HighlightDirective } from './directives/highlight';
import { authInterceptor } from './interceptors/auth-interceptor';
import { loggerInterceptor } from './interceptors/logger-interceptor';

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
    PostDetails,
    UserProfile,
    CapitalizePipe,
    HighlightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptors([authInterceptor, loggerInterceptor]))],
  bootstrap: [App],
})
export class AppModule {}
