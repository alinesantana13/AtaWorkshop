import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaboradores';
import { ColaboradorService } from 'src/app/services/servicesColaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-editar',
  templateUrl: './colaborador-editar.component.html',
  styleUrls: ['./colaborador-editar.component.css']
})
export class ColaboradorEditarComponent implements OnInit {

  btnAcao: string = "Editar";
  btnTitulo: string = "Editar o Colaborador";
  colaborador!: Colaborador; //! garante que vai ter dado

  constructor(private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.colaboradorService.GetColaborador(id).subscribe((data) => {
      this.colaborador = data;
    });

  }

  editarColaborador(colaborador: Colaborador){
    this.colaboradorService.EditarColaborador(colaborador).subscribe(data => {
      this.router.navigate(['/api/colaboradores']);
    });
  }

}
