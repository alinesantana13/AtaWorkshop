import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workshop } from 'src/app/models/workshops';
import { WorkshopService } from 'src/app/services/servicesWorkshop/workshop.service';

@Component({
  selector: 'app-workshop-detalhar',
  templateUrl: './workshop-detalhar.component.html',
  styleUrls: ['./workshop-detalhar.component.css']
})
export class WorkshopDetalharComponent implements OnInit {
  workshop?: Workshop;

  constructor(private workshopService: WorkshopService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.workshopService.GetWorshop(id).subscribe((data) => {
        const dados = data;

        dados.dataDeRealizacao = new Date(dados.dataDeRealizacao!).toLocaleDateString("pt-BR");

        this.workshop = dados;
      })


    }

}
