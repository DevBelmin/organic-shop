import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.css']
})
export class AdminNewProductComponent implements OnInit {

  categories$;

  constructor(private categoryService: CategoryService, private productService: ProductService, private router: Router) {
    this.categories$ = this.categoryService.getCategories();
   }

  ngOnInit() {
  }

  save(product) {
   this.productService.createProduct(product);

   this.router.navigate(['admin/products']);
  }

}
