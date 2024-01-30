import { Component, Input, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/servicesColaborador/colaborador.service';
import { Colaborador } from '../../models/colaboradores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit{
  @Input() colaborador?: Colaborador;


  colaboradores: Colaborador[] = [];
  colaboradoresGeral: Colaborador[] = [];


  constructor(private colaboradorService: ColaboradorService){}

  //o que for primeiro executado
  ngOnInit(): void {
    this.colaboradorService.GetColaboradores().subscribe(data => {

      this.colaboradores = data;
      this.colaboradoresGeral = data;
    });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.colaboradores = this.colaboradoresGeral.filter(colaborador => {
      return colaborador.nome.toLowerCase().includes(value.toLowerCase());
    })
  }

  excluirColaborador(colaborador: Colaborador){
    this.colaboradorService.ExcluirColaborador(colaborador).subscribe((data)=>{
      this.colaboradorService.GetColaboradores().subscribe((datas) =>{
        this.colaboradores = datas;
      })
    })
}
}
