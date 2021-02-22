import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})

export class ProdutosFormComponent implements OnInit {

  constructor(private fb: FormBuilder, 
              private service: DataService,
              private route: ActivatedRoute) { 
  }

  form!: FormGroup;
  submitted: boolean = false;
  check: boolean = false;
  problem: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        const produto$ = this.service.loadById("produtos", id);
        produto$.subscribe(produto => {
          this.updateForm(produto);
        })
      }
    );

    this.form = this.fb.group({
      id: [null],
      produto: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      descricao: [null, Validators.maxLength(250)],
      preco: [null, [Validators.required, Validators.min(1)]],
      quantidade: [null, [Validators.required, Validators.min(1)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.value.id && this.form.valid){
      this.service.update("produtos", this.form.value).subscribe(
        success => console.log('Produto atualizado com sucesso'),
        error => { console.error(error); this.problem = true;},
        () => { this.check = true; this.form.reset(); this.submitted = false; this.problem = false; }
        );
    } else {
      this.problem = false;
      this.check = false;
    }

    if(this.form.valid && !this.form.value.id){
      this.service.adicionar(this.form.value, "produtos").subscribe(
        success => console.log('Produto criado com sucesso'),
        error => { console.error(error); this.problem = true;},
        () => { this.check = true; this.form.reset(); this.submitted = false; this.problem = false; }
        );
    } else {
      this.problem = false;
      this.check = false;
    }
  }

  onCancel(){
    this.submitted = false;
    this.check = false;
    this.problem = false;
  }

  hasError(e: string){
    return this.form.get(e)?.errors;
  }

  updateForm(produto: Produto){
    this.form.patchValue({
      id: produto.id,
      produto: produto.produto,
      descricao: produto.descricao,
      quantidade: produto.quantidade,
      preco: produto.preco
    })
  }
}
