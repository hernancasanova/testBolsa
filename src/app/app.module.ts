import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreciosComponent } from './precios/precios.component';
import { NemosComponent } from './nemos/nemos.component';
import { GraficoComponent } from './grafico/grafico.component';
import { NemosModule } from './nemos/nemos.module';
import { GraficoModule } from './grafico/grafico.module';
import { PreciosModule } from './precios/precios.module';

@NgModule({
  declarations: [
    AppComponent,
    //PreciosComponent,
    // NemosComponent,
    //GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NemosModule,
    PreciosModule,
    GraficoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
