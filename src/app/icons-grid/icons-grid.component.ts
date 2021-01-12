import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {shuffle} from 'lodash';
import {UikitService} from '../uikit.service';

const angular = require('./icons/angular.svg').default;
const wordpress = require('./icons/wordpress.svg').default;
const php = require('./icons/php.svg').default;
const vuejs = require('./icons/vuejs.svg').default;

@Component({
    selector: 'app-icons-grids',
    templateUrl: './icons-grid.component.html',
    styleUrls: ['./icons-grid.component.less'],
})
export class IconsGridComponent implements AfterViewInit {
    @ViewChildren('icon') iconsElements: QueryList<ElementRef> | undefined;
    public icons: {
        name: string;
        link: string;
        safeLink?: SafeUrl;
    }[] = shuffle([
        {
            name: 'vuejs',
            link: vuejs,
        },
        {
            name: 'angular',
            link: angular,
        },
        {
            name: 'wordpress',
            link: wordpress,
        },
        {
            name: 'php',
            link: php,
        },
    ]);

    constructor(private uikit: UikitService) {
    }

    public ngAfterViewInit(): void {
        this.uikit.tooltip('grid__icon');
        this.iconsElements?.forEach((icon) => {
            this.uikit.tooltip(icon.nativeElement);
        });
    }
}
