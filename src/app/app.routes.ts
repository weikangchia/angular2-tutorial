import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {AboutComponent} from './about/about.component'
import {HomeComponent} from "./home/home.component";
import {PaginationComponent} from "./pagination/pagination.component";

export const router: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pagination', component: PaginationComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
