import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = [];
 

 ngOnInit(){


  $(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
        $("nav").removeClass("bg-transparent");
        $("nav").addClass("bg-dark"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $("nav").removeClass("bg-dark");
        $("nav").addClass("bg-transparent"); // if not, change it back to transparent
        
      }
     
    });
  });

$("button").click(function() {
  
    $('html,body').animate({
        scrollTop: $(".second").offset().top}, 'slow');
           
       
}); 







}

}



