import {Component, Input, OnInit} from '@angular/core';

interface ICircle {
  name: string,
  size?: string,
  animation?: string,
  style: {
    [key: string]: any,
  }
}

@Component({
  selector: 'oxum-circles',
  template: `
    <div class="circles--wrapper">
      <span
        *ngFor="let circle of circles; let i = index"
        class="circle circle-index{{i}} {{circle.animation || ''}}"
        [ngStyle]="circle.style"
      ></span>
      <span class="circle circle--zone" [ngStyle]="{'top': circles[0].style.top || 0}"></span>
    </div>
  `,
  styleUrls: ['./oxum-circles.component.less']
})
export class OxumCirclesComponent implements OnInit {
  @Input() circles: Array<ICircle> = [
    {
      name: 'outset-line',
      animation: 'rotate',
      style: {
        borderStyle: 'outset',
        top: '3.5em',
        animationDuration: '30s',
      }
    },
    {
      name: 'light-line',
      size: '11.5em',
      style: {
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        borderWidth: '0.25em',
        top: '2.8em',
      }
    },
    {
      name: 'blue-line',
      style: {
        top: '2.5em',
        borderStyle: 'solid',
      },
    },
    {
      name: 'big-line',
      size: '13.5em',
      style: {
        borderWidth: '0.65em',
        top: '1.8em',
      },
    },
    {
      name: 'dotted-line',
      size: '14.5em',
      animation: 'rotate',
      style: {
        borderStyle: 'dotted',
        borderColor: '#fff',
        top: '1.3em',
        animationDuration: '160s',
        animationTimingFunction: ' ease-out',
      },
    },
    {
      name: 'double-line',
      size: '17em',
      style: {
        borderStyle: 'double',
        borderWidth: '0.65em',
      },
    }
  ];

  ngOnInit(): void {
    this.circles.map((circle, index) => {
      const size = 10 + index;
      circle.style.width = circle.size || (size + 'em');
      circle.style.height = circle.size || (size + 'em');
    });
  }
}
