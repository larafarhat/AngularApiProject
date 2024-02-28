import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {

  public products: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((res) => {
      this.products = res
    });
  }

  

}
