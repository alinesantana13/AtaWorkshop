import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaboradores';
import { ColaboradorService } from 'src/app/services/servicesColaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-form',
  templateUrl: './colaborador-form.component.html',
  styleUrls: ['./colaborador-form.component.css']
})
export class ColaboradorFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Colaborador>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosColaborador: Colaborador | null = null;

  colaboradorForm!: FormGroup;

  constructor(private colaboradorService: ColaboradorService, private router: Router){}

  ngOnInit(): void {

    this.colaboradorForm = new FormGroup({
      id: new FormControl(this.dadosColaborador ? this.dadosColaborador.id : 0),
      nome: new FormControl(this.dadosColaborador ? this.dadosColaborador.nome: '', [Validators.required])
    });
  }

  submit(){
    this.onSubmit.emit(this.colaboradorForm.value);
  }
}
