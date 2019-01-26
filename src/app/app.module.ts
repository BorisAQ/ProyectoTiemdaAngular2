import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';
import { BarService, ItemDataService , DataService} from './share/data';
import { DineroPipe } from './share/pipes/dinero.pipe';
import { MonPipe } from './share/pipes/mon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DineroPipe,
MonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
  ],
  providers: [ItemDataService, DataService, BarService,MonPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
