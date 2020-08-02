import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SqrtPipe } from './pipes/sqrt.pipe';
import { MyStyleDirective } from './directives/my-style.directive';

import { ProductsComponent } from './layout/products/products.component';
import { NavComponent } from './layout/nav/nav.component';
import { BannerOneComponent } from './layout/banner-one/banner-one.component';
import { BannerTwoComponent } from './layout/banner-two/banner-two.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerThreeComponent } from './layout/banner-three/banner-three.component';
import { MobilesComponent } from './products/mobiles/mobiles.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { BooksComponent } from './products/books/books.component';
import { RoutingInfoModule } from './routing-info.module';
import { HomeComponent } from './products/home/home.component';
import { PageNotFoundComponent } from './products/page-not-found/page-not-found.component';
import { SamsungComponent } from './products/mobiles/samsung/samsung.component';
import { MotorolaComponent } from './products/mobiles/motorola/motorola.component';
import { MicromaxComponent } from './products/mobiles/micromax/micromax.component';
import { MobileSubNavComponent } from './products/mobiles/mobile-sub-nav/mobile-sub-nav.component';
import { ProductViewComponent } from './layout/product-view/product-view.component';

import { MobileDataService } from './services/mobile-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    MyStyleDirective,
    ProductsComponent,
    NavComponent,
    BannerOneComponent,
    BannerTwoComponent,
    ContactUsComponent,
    FooterComponent,
    BannerThreeComponent,
    MobilesComponent,
    LaptopsComponent,
    BooksComponent,
    HomeComponent,
    PageNotFoundComponent,
    SamsungComponent,
    MotorolaComponent,
    MicromaxComponent,
    MobileSubNavComponent,
    ProductViewComponent,
  ],
  imports: [BrowserModule, RoutingInfoModule, FormsModule, HttpModule],
  providers: [MobileDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
