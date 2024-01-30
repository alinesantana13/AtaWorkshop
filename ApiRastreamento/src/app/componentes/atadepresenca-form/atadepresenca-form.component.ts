import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AtaDePresenca } from 'src/app/models/ataDePresenca';
import { Router } from '@angular/router';
import { AtaDePresencaService } from 'src/app/services/servicesAtaDePresenca/ata-de-presenca.service';

@Component({
  selector: 'app-atadepresenca-form',
  templateUrl: './atadepresenca-form.component.html',
  styleUrls: ['./atadepresenca-form.component.css']
})
export class AtadepresencaFormComponent  implements OnInit{
  @Output() onSubmit = new EventEmitter<AtaDePresenca>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosAtaDePresenca: AtaDePresenca | null = null;

  ataDePresencaForm!: FormGroup;

  constructor(private ataDePresencaService: AtaDePresencaService,
    private router: Router){}

  ngOnInit(): void {

    this.ataDePresencaForm = new FormGroup({
      id: new FormControl(this.dadosAtaDePresenca ? this.dadosAtaDePresenca.id : 0),
      workshopId: new FormControl(this.dadosAtaDePresenca ? this.dadosAtaDePresenca.workshopId: '', [Validators.required]),
      colaboradorId: new FormControl(this.dadosAtaDePresenca ? this.dadosAtaDePresenca.colaboradorId : '', [Validators.required])
    });

  }

  submit(){
    this.onSubmit.emit(this.ataDePresencaForm.value);
  }


}
