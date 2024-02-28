import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = "https://api.secxtion.com/api/products/";

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get(this.API_URL);
  }
  public getDetails(id: number){
    return this.http.get(this.API_URL + id);

  }
}
