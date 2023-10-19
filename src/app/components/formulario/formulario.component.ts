import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiPaisesService } from 'src/app/services/api-paises.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  escudo:any;
  capital:any;
  population:any;
  bandera:any;
  region:any;
  maps:any;
  paisesLimitrofes:any;
  superficie:any;
  husoHorario:any

  constructor(private paisesService:ApiPaisesService, private formularios:FormBuilder){}

  pais:FormGroup = this.formularios.group({
    pais:['',Validators.required],
    
  })

  getPaises(){
    this.paisesService.getDatosPaises(this.pais.controls['pais'].value).subscribe({
      next:(respuesta)=>{
        console.log(respuesta)
        this.escudo = respuesta [0].coatOfArms.svg
        this.capital = respuesta [0].capital
        this.population = respuesta [0].population
        this.region = respuesta [0].continents
        this.superficie = respuesta [0].area
        this.paisesLimitrofes = respuesta [0].borders
        this.maps = respuesta [0].maps.googleMaps
        this.bandera = respuesta [0].flags.png
        this.husoHorario = respuesta [0].timezones
      },
      error:()=>{
        alert('no existe ese pais')
      }
    })
  }

}
