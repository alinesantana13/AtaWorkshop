import { Component, Input, OnInit } from '@angular/core';
import { Workshop } from '../../models/workshops';
import { WorkshopService } from 'src/app/services/servicesWorkshop/workshop.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit{
  @Input() workshop?: Workshop;

  workshops: Workshop[] = [];
  workshopsGeral: Workshop[] = [];

  constructor(private workshopService: WorkshopService){}

  ngOnInit(): void {
    this.workshopService.GetWorshops().subscribe((data) => {
      data.map((item) => {
        item.dataDeRealizacao = new Date(item.dataDeRealizacao!).toLocaleDateString('pt-Br');
      });

      this.workshops = data;

      this.workshopsGeral = data;
    })
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.workshops = this.workshopsGeral.filter(workshop => {
      return workshop.nome.toLowerCase().includes(value.toLowerCase());
    })
  }

  excluirWorkshop(workshop: Workshop){
    this.workshopService.ExcluirColaborador(workshop).subscribe((data) => {
      this.workshopService.GetWorshops().subscribe((datas) => {
        this.workshops = datas;
      })
    })
  }

}
