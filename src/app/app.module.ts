import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardTileComponent} from './dashboard/dashboard-tile/dashboard-tile.component';
// import {DashboardModule} from './dashboard/dashboard.module';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTileComponent
  ],
  entryComponents: [
    DashboardTileComponent
  ],
  imports: [
    BrowserModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {

    const tileCE = createCustomElement(DashboardTileComponent, {injector: this.injector});
    customElements.define('dashboard-tile', tileCE);

  }

  // ngDoBootstrap() {
  //   const externalTileCE = createCustomElement(DashboardTileComponent, { injector: this.injector });
  //   customElements.define('external-dashboard-tile', externalTileCE);
  // }
}
