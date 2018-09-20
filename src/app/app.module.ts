import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouzlistService } from './shared/houzlist.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    UiModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [HouzlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
