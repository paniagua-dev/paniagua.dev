import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'oxum-loading-page',
    template: `
        <div class="oxum-loading__screen">
            <div class="oxum-loading__icon">
                Loading...
            </div>
        </div>
    `,
    styleUrls: ['./oxum-loading-page.component.less'],
})
export class OxumLoadingPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
