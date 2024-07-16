import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VodkaService } from '../services/vodka.service';

@Component({
  selector: 'app-vodka',
  standalone: true,
  imports: [HttpClientModule],
  providers:[VodkaService],
  templateUrl: './vodka.component.html',
  styleUrl: './vodka.component.css'
})
export class VodkaComponent {
  vodkas: any[] = [];

  constructor(private vodkaServicio: VodkaService){
    
  }

  ngOnInit():void{
    this.vodkaServicio.obtenerDatos().subscribe(datos =>{
      this.vodkas = datos.drinks;
    })
  }

}
