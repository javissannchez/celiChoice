import { Routes } from '@angular/router';
import { PrincipalComponent } from './dominios/paginas/principal/principal.component';
import { DetallesRestauranteComponent } from './dominios/paginas/detalles-restaurante/detalles-restaurante.component';
export const routes: Routes = [
    { path: '', component: PrincipalComponent }
     // Muestra la lista de restaurantes aqu
];
