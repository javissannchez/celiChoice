import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../../servicios/restaurantes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-restaurantes',
  standalone: true,
  imports: [],
  templateUrl: './lista-restaurantes.component.html',
  styleUrl: './lista-restaurantes.component.css'
})
export class ListaRestaurantesComponent implements OnInit{
  restaurantes: any[] = [];

  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.restaurantesService.cargarRestaurantes().then(data => {
      this.restaurantes = data;
    });
  }



}
