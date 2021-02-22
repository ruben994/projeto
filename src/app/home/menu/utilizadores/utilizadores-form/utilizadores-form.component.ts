import { Utilizador } from './../utilizador';
import { DataService } from '../../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-utilizadores-form',
  templateUrl: './utilizadores-form.component.html',
  styleUrls: ['./utilizadores-form.component.css']
})
export class UtilizadoresFormComponent implements OnInit {

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
        const utilizador$ = this.service.loadById("utilizadores", id);
        utilizador$.subscribe(utilizador => {
          this.updateForm(utilizador);
        })
      }
    );

    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      email: [null, Validators.maxLength(250)],
      password: [null, [Validators.required, Validators.min(1)]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.form.value.id && this.form.valid){
      this.service.update("utilizadores", this.form.value).subscribe(
        success => console.log('Utilizador atualizado com sucesso'),
        error => { console.error(error); this.problem = true;},
        () => { this.check = true; this.form.reset(); this.submitted = false; this.problem = false; }
        );
    } else {
      this.problem = false;
      this.check = false;
    }

    if(this.form.valid && !this.form.value.id){
      this.service.adicionar(this.form.value, "utilizadores").subscribe(
        success => console.log('Utilizador criado com sucesso'),
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

  updateForm(utilizador: Utilizador){
    this.form.patchValue({
      id: utilizador.id,
      nome: utilizador.nome,
      email: utilizador.email,
      password: utilizador.password,
    })
  }

}
