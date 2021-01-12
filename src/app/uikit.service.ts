import {Injectable} from '@angular/core';
import UIkit from 'uikit';
import UIkitTooltipOptions = UIkit.UIkitTooltipOptions;

/**
 * THIS CLASS USE UIKIT FUNCTIONALITIES
 */
@Injectable()
export class UikitService {
    /**
     * FadeIn add a the class 'fadeIn' when the element is in the view port
     * @param classSelector
     */
    public fadeIn(classSelector: string): void {
        UIkit.scrollspy(classSelector, {
            cls: 'fadeIn',
            delay: 80,
        });
    }

    /**
     * Add a tooltip to the specific element
     * @param element : HTMLElement | string
     * @param options : UIkitTooltipOptions
     */
    public tooltip(element: HTMLElement | string, options?: UIkitTooltipOptions): void {
        UIkit.tooltip(element, options || {});
    }
}
