import { Injectable } from '@angular/core';
import { Restaurante } from '../interfaces/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor() { }

  cargarRestaurantes(): Promise<Restaurante[]> {
    return fetch('/assets/soloRestaurantes.json')
      .then(response => response.json() as Promise<Restaurante[]>);
  }

  obtenerRestaurantePorId(id: number): Promise<Restaurante | undefined> {
    return this.cargarRestaurantes().then((restaurantes: Restaurante[]) =>
      restaurantes.find((restaurante: Restaurante) => restaurante.id === id)
    );
  }
}
