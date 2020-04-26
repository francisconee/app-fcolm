import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, animation} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('Face',[
      state('void',style({
        transform: 'translateY(-10%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('1s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),
    trigger('Cuadro',[
      state('void',style({
        transform: 'translateY(10%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('1.5s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),

    trigger('Ui',[
      state('void',style({
        transform: 'translateY(10%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('1.5s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),

    trigger('Front',[
      state('void',style({
        transform: 'translateY(-20%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('1.5s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),

    trigger('Parrafo',[
      state('void',style({
        transform: 'translateY(30%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('1.5s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
