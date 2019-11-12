import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModelDirective } from './ng-model.directive';
import { BsModalService, BsModalRef, PositioningService, ButtonsModule } from 'ngx-bootstrap';
import { ComponentLoaderFactory } from "ngx-bootstrap/component-loader";


@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    HomeComponent,
    NgModelDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [BsModalService, BsModalRef,  ComponentLoaderFactory, PositioningService, ButtonsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
