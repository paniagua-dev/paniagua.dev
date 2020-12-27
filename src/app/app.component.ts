import {AfterViewInit, Component} from '@angular/core';
import {UikitService} from './uikit.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
    public loading = true;

    constructor(private kit: UikitService) {
    }

    ngAfterViewInit(): void {
        this.kit.fadeIn('.grid__icon');
    }
}
