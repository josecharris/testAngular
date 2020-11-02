import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginGuardian } from './login/login.guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
