import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule} from 'ngx-bootstrap/ng2-bootstrap';


import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';

import { UserService } from './user.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

import {appRouterModule} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    appRouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
