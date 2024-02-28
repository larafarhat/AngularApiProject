import { Component, OnInit, ɵprovideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {

  public id: number;
  public details: any;
  constructor(private route: ActivatedRoute, private service: ProductsService){
    this.id=-1;
    this.route.params.subscribe(params => {
      if (typeof params['id'] !== 'undefined') {
        this.id = params['id'];
        console.log(params['id']);
      } else {
        this.id = -1;
      }
    })
  }
  ngOnInit(): void {
    this.service.getDetails(this.id).subscribe((res) => {
      this.details=res;
    });
  }



}