$(document).ready(function() {


$("#sidebar-button").click(function () {
 if ($(".sidebar-container").hasClass("sidebar-active")) {
     $("body").removeClass("no-scroll");
     $("#sidebar-button").removeClass("button-active");
     $(".sidebar-container").removeClass("sidebar-active");
     $(".page-wrapper").removeClass("wrapper-active");
 }
 else {
      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
      setTimeout(function() {
      $("body").addClass("no-scroll");
      }, 300);
    } 
}); 


$(".page-wrapper").click(function () {
 if ($(".sidebar-container").hasClass("sidebar-active")) {
     $("body").removeClass("no-scroll");
     $("#sidebar-button").removeClass("button-active");
     $(".sidebar-container").removeClass("sidebar-active");
     $(".page-wrapper").removeClass("wrapper-active");
 }
}); 

$("#carousel-next").click(function () {
 var current_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
 if (current_margin==-3840){
  return false; 
 }
 else {
  $("#carousel").css("margin-left", current_margin-960);
    } 
}); 


$("#carousel-prev").click(function () {
 var current_margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
 if (current_margin==0){
  return false; 
 }
 else {
  $("#carousel").css("margin-left", current_margin+960);
    } 
}); 


$(".nav-anchor").click(function () {
  $("body").removeClass("no-scroll");
  $('html, body').animate({
  scrollTop: $( $.attr(this, 'href')).offset().top
  }, 1200);
  setTimeout(function() {
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
      }, 1200);
});

$("#nickyhomeimage").hover(

  function () {
  $("#nickyhomeimage").addClass("rotate");
  },
  
  function() {
  $("#nickyhomeimage").removeClass("rotate");
  }

  );

});








