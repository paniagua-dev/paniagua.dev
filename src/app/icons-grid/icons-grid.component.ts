import {Component} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {shuffle} from 'lodash';

const angular = require('./icons/angular.svg').default;
const wordpress = require('./icons/wordpress.svg').default;
const php = require('./icons/php.svg').default;
const vuejs = require('./icons/vuejs.svg').default;

@Component({
  selector: 'app-icons-grids',
  templateUrl: './icons-grid.component.html',
  styleUrls: ['./icons-grid.component.less']
})
export class IconsGridComponent {
  icons: {
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

  constructor(private sanitizer: DomSanitizer) {
  }

  toSanitize(imgSrc: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imgSrc);
  }

}
