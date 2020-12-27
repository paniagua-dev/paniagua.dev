import {Injectable} from '@angular/core';
import UIkit from 'uikit';

@Injectable({
  providedIn: 'root'
})
export class UikitService {
  public fadeIn(element: string): void {
    UIkit.scrollspy(element, {
      cls: 'fadeIn',
      delay: 80,
    })
  }
}
