import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  private restaurantes: Restaurante[] = []; // Aquí deberías cargar tus datos reales

  constructor() { 
    this.cargarRestaurantes();
  }

  private cargarRestaurantes() {
    // Simulamos una carga asíncrona, por ejemplo desde un archivo JSON local
    fetch('/assets/soloRestaurantes.json')
      .then(response => response.json() as Promise<Restaurante[]>)
      .then(data => this.restaurantes = data)
      .catch(error => console.error('Error al cargar los restaurantes:', error));
  }

  getRestaurantes(): Restaurante[] {
    return this.restaurantes;
  }

  getRestaurante(id: number): Restaurante | undefined {
    return this.restaurantes.find(restaurante => restaurante.id === id);
  }
}
