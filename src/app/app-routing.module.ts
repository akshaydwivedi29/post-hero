import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'post-comments/:id', component: PostCommentsComponent },
  { path: '', redirectTo: '/post-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
