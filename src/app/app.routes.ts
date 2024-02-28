import { Routes } from '@angular/router';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: CatalogueComponent },
    { path: 'catalogue/:id', component: ProductDetailsComponent }

];
