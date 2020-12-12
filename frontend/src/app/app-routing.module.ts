import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterComponent } from './routes/alter/alter.component';
import { HomeComponent } from './routes/home/home.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'alter/:id', component: AlterComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 