import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

export interface Product {
  title: string;
  price: number;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'price', "actions"];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users : any[];
  private productSubscription: any;

  //products$: Observable<any[]>;

  constructor(private productService : ProductService) {

    this.productSubscription = this.productService.getProducts().subscribe(
      data => {
        this.users = data;
        console.log(data);
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );


    //this.products$ = this.productService.getProducts();

   }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
    console.log("Products on destroy...");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
