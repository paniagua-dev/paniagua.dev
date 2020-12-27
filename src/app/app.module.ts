import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {OxumWallpaperModule} from 'oxum-wallpaper';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OxumCirclesModule} from 'oxum-circles';
import {IconsGridComponent} from './icons-grid/icons-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OxumCirclesModule,
    OxumWallpaperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
