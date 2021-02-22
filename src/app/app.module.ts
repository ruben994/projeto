import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginService } from './login/login.service';
import { DataService } from './home/menu/data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DatashowComponent } from './login/datashow/datashow.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ProdutosComponent } from './home/menu/produtos/produtos.component';
import { UtilizadoresComponent } from './home/menu/utilizadores/utilizadores.component';
import { ProdutosFormComponent } from './home/menu/produtos/produtos-form/produtos-form.component';
import { UtilizadoresFormComponent } from './home/menu/utilizadores/utilizadores-form/utilizadores-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DatashowComponent,
    HomeComponent,
    NavbarComponent,
    ProdutosComponent,
    UtilizadoresComponent,
    ProdutosFormComponent,
    UtilizadoresFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
