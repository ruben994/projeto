import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Utilizador } from './utilizador';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-utilizadores',
  templateUrl: './utilizadores.component.html',
  styleUrls: ['./utilizadores.component.css']
})
export class UtilizadoresComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  utilizadores$!: Observable<Utilizador[]>
  user_selected!: Utilizador;

  ngOnInit(): void {
    this.utilizadores$ = this.service.listar("utilizadores");
  }

  onEdit(id: number){
    this.router.navigate(['utilizadores', 'editar', id]);
  }

  onDelete(utilizador: Utilizador){
    this.user_selected = utilizador;
    this.service.remove("utilizadores", utilizador.id).subscribe(
      success => { alert("O utilizador foi removido com sucesso!"), this.utilizadores$ = this.service.listar("utilizadores");},
      error => alert("Ocorreu um erro, tente novamente!") 
    );
  }
}
