import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Workshop } from 'src/app/models/workshops';

@Component({
  selector: 'app-workshop-form',
  templateUrl: './workshop-form.component.html',
  styleUrls: ['./workshop-form.component.css']
})
export class WorkshopFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Workshop>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosWorkshop: Workshop | null = null;

  workshopForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.workshopForm = new FormGroup({
      id: new FormControl(this.dadosWorkshop ? this.dadosWorkshop.id : 0),
      nome: new FormControl(this.dadosWorkshop ? this.dadosWorkshop.nome : '', [Validators.required]),
      dataDeRealizacao: new FormControl(this.dadosWorkshop? this.dadosWorkshop.dataDeRealizacao : new Date()),
      descricao: new FormControl(this.dadosWorkshop ? this.dadosWorkshop.descricao : '')
    })
  }
  submit(){
    this.onSubmit.emit(this.workshopForm.value);
  }
}
