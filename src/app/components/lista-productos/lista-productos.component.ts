import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

}
