import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './components/login/login.component'
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
