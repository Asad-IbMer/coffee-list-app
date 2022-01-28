import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatCardModule} from '@angular/material/card'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';
import {FlexLayoutModule} from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    NgxPaginationModule,
    FlexLayoutModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
