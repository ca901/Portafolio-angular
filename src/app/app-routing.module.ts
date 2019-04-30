import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortafolioComponent} from './pages/portafolio/portafolio.component';
import {AboutComponent} from './pages/about/about.component';
import {ProductsComponent} from './pages/products/products.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';



const app_routes: Routes = [

  { path: '', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', pathMatch:'full', redirectTo: ''}


];

@NgModule({
  imports: [
      RouterModule.forRoot( app_routes )
  ],

  exports : [
    RouterModule
  ]

})
export class AppRoutingModule {


}
