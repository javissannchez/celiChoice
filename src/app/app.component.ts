import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaRestaurantesComponent } from './dominios/compartido/lista-restaurantes/lista-restaurantes.component';
import { PrincipalComponent } from './dominios/paginas/principal/principal.component';
import { HeaderComponent } from './dominios/compartido/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celiApp';
}
