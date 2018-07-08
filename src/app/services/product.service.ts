import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http, private db: AngularFireDatabase) { 

  }

  /*
  public getProducts() : Observable<any> {
    return this.http.get("./assets/mock-data/products.json")
    .pipe(
      map(
        (res:any) => {
          return res.json();
        }
      )
    )
  }
  */

  public getProducts() {
    return this.db.list('/products').snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(
            c => ({ key: c.payload.key, ...c.payload.val()})
          )
        })
      )
  }

  createProduct(product) {
    return this.db.list('/products').push(product);
  }

}
