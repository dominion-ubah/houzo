import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './house-list/house-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'house-list', component: HouseListComponent},


]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
