import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtaDePresenca } from 'src/app/models/ataDePresenca';
import { AtaDePresencaService } from 'src/app/services/servicesAtaDePresenca/ata-de-presenca.service';
import { ColaboradorService } from 'src/app/services/servicesColaborador/colaborador.service';

@Component({
  selector: 'app-ata-de-presenca',
  templateUrl: './ata-de-presenca.component.html',
  styleUrls: ['./ata-de-presenca.component.css']
})
export class AtaDePresencaComponent implements OnInit{
  @Input() ataDePresenca?: AtaDePresenca;

  atasDePresenca: AtaDePresenca[] = [];
  atasDePresencaGeral: AtaDePresenca[] = [];
  listaID: number[] = [];

  nomes: string[] = [];

  constructor(private ataDePresencaService: AtaDePresencaService,
    private route: ActivatedRoute,
    private colaboradorService: ColaboradorService){}

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.ataDePresencaService.GetAtasDePresenca(params['id']).subscribe((data) => {

        this.atasDePresenca = data;

        this.atasDePresencaGeral = data;

        data.forEach(item => {
            this.listaID.push(item.colaboradorId)
        });

        for (let index = 0; index < this.listaID.length; index++) {
          this.colaboradorService.GetColaborador(this.listaID[index]).subscribe((data) => {
            this.atasDePresenca[index].nomeColaborador = data.nome;

          })
        }

      })
    })

  }

  excluirAtaDePresenca(ataDePresenca: AtaDePresenca){
    this.ataDePresencaService.ExcluirAtaDePresenca(ataDePresenca).subscribe((data) => {
      this.route.params.subscribe((params)=>{
        this.ataDePresencaService.GetAtasDePresenca(params['id']).subscribe((datas)=>{
          this.atasDePresenca = datas;
        })})
    })
  }

}
