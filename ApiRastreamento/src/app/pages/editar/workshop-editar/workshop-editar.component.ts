import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workshop } from 'src/app/models/workshops';
import { WorkshopService } from 'src/app/services/servicesWorkshop/workshop.service';

@Component({
  selector: 'app-workshop-editar',
  templateUrl: './workshop-editar.component.html',
  styleUrls: ['./workshop-editar.component.css']
})
export class WorkshopEditarComponent implements OnInit{
  btnAcao: string = "Editar";
  btnTitulo: string = "Editar o Worshop";
  workshop!: Workshop; //! garante que vai ter dado

  constructor(private workshopService: WorkshopService,
    private route: ActivatedRoute,
    private router: Router){

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.workshopService.GetWorshop(id).subscribe((data) => {
      this.workshop = data;
    });

  }

  editarWorkshop(workshop: Workshop){
    this.workshopService.EditarWorkshop(workshop).subscribe(data => {
      this.router.navigate(['/api/workshops']);
    });
  }
}
