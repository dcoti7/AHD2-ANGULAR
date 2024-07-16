import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { WineService } from '../services/wine.service';

@Component({
  selector: 'app-wine',
  standalone: true,
  imports: [HttpClientModule],
  providers:[WineService],
  templateUrl: './wine.component.html',
  styleUrl: './wine.component.css'
})
export class WineComponent {
  wines: any[] = [];

  constructor(private wineServicio: WineService){
    
  }

  ngOnInit():void{
    this.wineServicio.obtenerDatos().subscribe(datos =>{
      this.wines = datos.drinks;
    })
  }

}
