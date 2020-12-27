import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    Optional,
    Output,
    Renderer2,
} from '@angular/core';
import {SafeStyle} from '@angular/platform-browser';
import {OxumWallpaperService} from './oxum-wallpaper.service';

@Directive({
    selector: '[oxumWallpaper]',
    providers: [OxumWallpaperService],
})
export class OxumWallpaperDirective implements AfterViewInit {
    @HostBinding('style.background-image') backgroundImage: SafeStyle | undefined;
    @Optional() @Output() loading : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private elementRef: ElementRef,
        private render: Renderer2,
        private oxumWallpaperService: OxumWallpaperService,
    ) {
    }

    ngAfterViewInit(): void {
        this.loading.emit(true);
        this.oxumWallpaperService.getRandomPhoto().subscribe((picture) => {
            this.setBackground(picture);
            this.loading.emit(false);
        });
    }

    setBackground(picture: string): void {
        this.render.setStyle(this.elementRef.nativeElement, 'backgroundImage', `url(${picture})`);
    }

}
