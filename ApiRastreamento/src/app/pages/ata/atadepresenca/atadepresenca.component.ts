import { Component } from '@angular/core';
import { AtaDePresenca } from 'src/app/models/ataDePresenca';
import { Router } from '@angular/router';
import { AtaDePresencaService } from 'src/app/services/servicesAtaDePresenca/ata-de-presenca.service';

@Component({
  selector: 'app-atadepresenca',
  templateUrl: './atadepresenca.component.html',
  styleUrls: ['./atadepresenca.component.css']
})
export class AtadepresencaComponent{

  constructor(private ataDePresencaService: AtaDePresencaService,
    private router: Router){}


  createAtadePresenca(ataDePresenca: AtaDePresenca){
    this.ataDePresencaService.CreateAtaDePresenca(ataDePresenca).subscribe((data) => {
      this.router.navigate(['/api/atadepresenca']);
    });
  }
}
