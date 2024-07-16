import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PhoneComponent } from './phone/phone.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent, FormComponent, CardComponent, AlertComponent,
    GridComponent, SignupComponent, PhoneComponent

  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
