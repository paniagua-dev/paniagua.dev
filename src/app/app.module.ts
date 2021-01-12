import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {OxumCirclesModule} from 'oxum-circles';
import {OxumWallpaperModule} from 'oxum-wallpaper';
import {AppComponent} from './app.component';
import {IconsGridComponent} from './icons-grid/icons-grid.component';
import {UikitService} from './uikit.service';

@NgModule({
    declarations: [
        AppComponent,
        IconsGridComponent,
    ],
    imports: [
        BrowserModule,
        OxumCirclesModule,
        OxumWallpaperModule,
    ],
    providers: [UikitService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
