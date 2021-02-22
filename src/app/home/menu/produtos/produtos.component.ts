import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produtos';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private service: DataService, private router: Router) { }

  produtos$!: Observable<Produto[]>
  prod_selected!: Produto;

  ngOnInit(): void {
    this.produtos$ = this.service.listar("produtos");
  }

  onEdit(id: number){
    this.router.navigate(['produtos', 'editar', id]);
  }

  onDelete(produto: Produto){
    this.prod_selected = produto;
    this.service.remove("produtos", produto.id).subscribe(
      success => { alert("O produto foi removido com sucesso!"), this.produtos$ = this.service.listar("produtos"); },
      error => alert("Ocorreu um erro, tente novamente!")
    );
  }

}
