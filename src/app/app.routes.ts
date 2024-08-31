import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { logedGuard } from './core/guards/loged.guard';
import { AuthComponent } from './components/layout/auth/auth.component';
import { BlankComponent } from './components/layout/blank/blank.component';




export const routes: Routes = [
    {path:'',component:AuthComponent,canActivate:[logedGuard],children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:'login',loadComponent:()=>import('./components/login/login.component').then((c)=>c.LoginComponent)},
        {path:'register',loadComponent:()=>import('./components/register/register.component').then((c)=>c.RegisterComponent)},
        {path:'forgot',loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then((c)=>c.ForgotpasswordComponent)},
    ]},

    {path:'',component:BlankComponent,canActivate:[authGuard],children:[
        {path:'',redirectTo:'home',pathMatch:'full'},
        {path:'home',component:HomeComponent},
        {path:'product',loadComponent:()=>import('./components/products/products.component').then((c)=>c.ProductsComponent)},
        {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((c)=>c.CartComponent)},
        {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((c)=>c.CategoriesComponent)},
        {path:'brand',loadComponent:()=>import('./components/brands/brands.component').then((c)=>c.BrandsComponent)},
        {path:'details/:id',loadComponent:()=>import('./components/details/details.component').then((c)=>c.DetailsComponent)},
        {path:'order/:id',loadComponent:()=>import('./components/order/order.component').then((c)=>c.OrderComponent)},
        {path:'allorders',loadComponent:()=>import('./components/all-orders/all-orders.component').then((c)=>c.AllOrdersComponent)},
        {path:'wish',loadComponent:()=>import('./components/wish-list/wish-list.component').then((c)=>c.WishListComponent)},
    
    ]},

    {path:'**',loadComponent:()=>import('./components/notfound/notfound.component').then((c)=>c.NotfoundComponent)}
 
];
