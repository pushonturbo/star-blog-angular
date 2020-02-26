import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
