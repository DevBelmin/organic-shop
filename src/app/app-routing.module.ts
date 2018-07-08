import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminNewProductComponent } from './admin/admin-new-product/admin-new-product.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
  { path: 'order-sucess', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
 
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },

  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/products/new', component: AdminNewProductComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/products/:id', component: AdminNewProductComponent, canActivate: [AuthGuardService, AdminGuardService] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminGuardService] },

  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule {}