import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule  } from '@angular/http';
//Import common
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { MyservicesService } from './myservices.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
