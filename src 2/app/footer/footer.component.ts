import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, animate, transition, animation} from '@angular/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
  animations: [
    trigger('Numero',[
      state('void',style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('.6s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),

    trigger('NumeroDos',[
      state('void',style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('.9s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ]),

    trigger('Barrita',[
      state('void',style({
        transform: 'translateY(-10%)',
        opacity: 0
      })),
      transition(':enter',[
        animate('.9s ease-in-out', style({
          transform: 'translateX(0)',
          opacity: 1,
        }))
      ])
    ])
  ]
  
})
export class FooterComponent implements OnInit {

  public location = '';

  constructor(private _router : Router ){
    _router.events.subscribe((url:any) => {
      if (url.url){
        this.location = url.url;
      }
    });
    //this.location = _router.url;
    
  }

  ngOnInit() {
    $("nav ul li:nth-of-type(1) a").click(function(){
      $(".nav-central .numbers .number-item").addClass("animate-number-item");
    });
  }

}