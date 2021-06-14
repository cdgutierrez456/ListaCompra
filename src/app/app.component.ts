import { Component } from '@angular/core';
import { Producto } from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
  }

  onProductoCreado($event) {
    this.productosSeleccionados.push($event);
  }

}
