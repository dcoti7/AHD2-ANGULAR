import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TequilaService } from '../services/tequila.service';

@Component({
  selector: 'app-tequila',
  standalone: true,
  imports: [HttpClientModule],
  providers: [TequilaService],
  templateUrl: './tequila.component.html',
  styleUrl: './tequila.component.css'
})
export class TequilaComponent {
  tequilas: any[] = [];

  constructor(private tequilaServicio: TequilaService){
    
  }

  ngOnInit():void{
    this.tequilaServicio.obtenerDatos().subscribe(datos =>{
      this.tequilas = datos.drinks;
    })
  }

}
