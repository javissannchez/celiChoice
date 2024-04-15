import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRestaurantesComponent } from './componentes/lista-restaurantes/lista-restaurantes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ListaRestaurantesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
{
  restaurantes: any[] = [];

  ngOnInit() {
    fetch('/assets/soloRestaurantes.json')
      .then(response => response.json())
      .then(data => {
        this.restaurantes = data;
      });
  }
}
