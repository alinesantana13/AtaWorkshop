import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaboradores';
import { ColaboradorService } from 'src/app/services/servicesColaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-cadastro',
  templateUrl: './colaborador-cadastro.component.html',
  styleUrls: ['./colaborador-cadastro.component.css']
})
export class ColaboradorCadastroComponent {
  btnAcao = "Cadastrar"
  btnTitulo = "Casdastrar Colaborador"

  constructor(private colaboradorService: ColaboradorService, private router: Router){

  }

  createColaborador(colaborador: Colaborador){
    this.colaboradorService.CreateColaborador(colaborador).subscribe((data) => {
      this.router.navigate(['/api/colaboradores']);
    });
  }
}
