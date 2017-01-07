import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./authors.component";
import {AutoGrowDirective} from "./auto-grow.directive";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from './footer/footer.component';
import {AboutComponent} from './about/about.component';
import {routes} from "./app.router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    HeaderComponent,
    AutoGrowDirective,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
