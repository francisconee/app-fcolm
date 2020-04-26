import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".link").click(function(){
      $(this).parent("li").parent("ul").find(".active").removeClass("active");
      $(this).addClass("active")
    });

    $('.menu-toggle').on('click',function(){
      $('.menu-toggle').toggleClass('active');
      $('.menu-container').toggleClass('hidden-menu');
    });

    $('.link-nav').on('click',function(){
      $('.menu-toggle').toggleClass('active');
      $('.menu-container').addClass('hidden-menu');
    });

  }

  
}
