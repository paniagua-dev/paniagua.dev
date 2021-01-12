import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {OxumCirclesModule} from 'oxum-circles';
import {OxumWallpaperModule} from 'oxum-wallpaper';
import {TooltipModule} from 'primeng/tooltip';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
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
        TooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}