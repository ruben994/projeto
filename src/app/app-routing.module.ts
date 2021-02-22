import { UtilizadoresFormComponent } from './home/menu/utilizadores/utilizadores-form/utilizadores-form.component';
import { ProdutosFormComponent } from './home/menu/produtos/produtos-form/produtos-form.component';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './home/menu/produtos/produtos.component';
import { UtilizadoresComponent } from './home/menu/utilizadores/utilizadores.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'utilizadores', component: UtilizadoresComponent },
  { path: 'utilizadores/novo', component: UtilizadoresFormComponent },
  { path: 'utilizadores/editar/:id', component: UtilizadoresFormComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos/novo', component: ProdutosFormComponent },
  { path: 'produtos/editar/:id', component: ProdutosFormComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
