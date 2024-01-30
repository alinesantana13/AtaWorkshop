import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Workshop } from 'src/app/models/workshops';
import { WorkshopService } from 'src/app/services/servicesWorkshop/workshop.service';

@Component({
  selector: 'app-workshop-cadastro',
  templateUrl: './workshop-cadastro.component.html',
  styleUrls: ['./workshop-cadastro.component.css']
})
export class WorkshopCadastroComponent {
  btnAcao = "Cadastrar"
  btnTitulo = "Casdastrar Workshop"

  constructor(private workshopService: WorkshopService, private router: Router){

  }

  createWorkshop(workshop: Workshop){
    this.workshopService.CreateWorkshop(workshop).subscribe((data) => {
      this.router.navigate(['/api/workshops']);
    });
  }
}
