import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SearchPipe} from './shared/search.pipe';

import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouzlistService } from './shared/houzlist.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    HomeComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    UiModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [HouzlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
