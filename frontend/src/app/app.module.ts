import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RegisterComponent } from './routes/register/register.component';
import { HomeComponent } from './routes/home/home.component';
import { AlterComponent } from './routes/alter/alter.component';
import { ClientService } from './services/client/client.service';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    AlterComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
