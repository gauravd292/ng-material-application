import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './products/home/home.component';
import { PageNotFoundComponent } from './products/page-not-found/page-not-found.component';

import { MobilesComponent } from './products/mobiles/mobiles.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { BooksComponent } from './products/books/books.component';

import { SamsungComponent } from './products/mobiles/samsung/samsung.component';
import { MotorolaComponent } from './products/mobiles/motorola/motorola.component';
import { MicromaxComponent } from './products/mobiles/micromax/micromax.component';
import { MobileSubNavComponent } from './products/mobiles/mobile-sub-nav/mobile-sub-nav.component';
import { ProductViewComponent } from './layout/product-view/product-view.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';

const appRoots: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'product-view/:obj',
    component: ProductViewComponent,
  },
  {
    path: 'mobile',
    component: MobileSubNavComponent,
    children: [
      { path: '', component: MobilesComponent },
      { path: 'samsung', component: SamsungComponent },
      { path: 'motorola', component: MotorolaComponent },
      { path: 'micromax', component: MicromaxComponent },
    ],
  },
  { path: 'laptop', component: LaptopsComponent },
  { path: 'laptop/:id', component: LaptopsComponent },
  { path: 'book', component: BooksComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoots)],
  exports: [RouterModule],
})
export class RoutingInfoModule {}
