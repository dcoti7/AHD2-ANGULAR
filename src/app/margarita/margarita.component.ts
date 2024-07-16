import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MargaritaService } from '../services/margarita.service';


@Component({
  selector: 'app-margarita',
  standalone: true,
  imports: [HttpClientModule],
  providers: [MargaritaService],
  templateUrl: './margarita.component.html',
  styleUrl: './margarita.component.css'
})
export class MargaritaComponent {
  margaritas: any[] = [];

  constructor(private margaritaServicio: MargaritaService){
    
  }

  ngOnInit():void{
    this.margaritaServicio.obtenerDatos().subscribe(datos =>{
      this.margaritas = datos.drinks;
    })
  }

}
