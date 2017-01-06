import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {AutoGrowDirective} from "./auto-grow.directive";
import {PolymerElement} from "@vaadin/angular2-polymer";

@NgModule({
  declarations: [
      AppComponent,
      CoursesComponent,
      AuthorsComponent,
      AutoGrowDirective,
      PolymerElement('paper-input'),
      PolymerElement('paper-fab')
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
