import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaboradores';
import { ColaboradorService } from 'src/app/services/servicesColaborador/colaborador.service';

@Component({
  selector: 'app-colaborador-detalhar',
  templateUrl: './colaborador-detalhar.component.html',
  styleUrls: ['./colaborador-detalhar.component.css']
})
export class ColaboradorDetalharComponent implements OnInit{
  colaborador?: Colaborador;

  constructor(private colaboradorService: ColaboradorService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.colaboradorService.GetColaborador(id).subscribe((data) => {
        this.colaborador = data;
      })


    }
}
