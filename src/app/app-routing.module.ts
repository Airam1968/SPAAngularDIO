import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CvitaeComponent } from './cvitae/cvitae.component';
import { BookComponent } from './book/book.component';


const routes: Routes = [
  { path: 'book', component: BookComponent },  
  { path: 'cvitae', component: CvitaeComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
