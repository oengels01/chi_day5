

$(document).ready(function(){
  appendDom();
  addEventListeners();
});

function appendDom(){
  $(".container").append("<div class='box'></div>");

  $(".container").append("<p>First</p>");
  $(".container").append("<p id='second'>Second</p>");
  $(".container").append("<p>Third</p>");
  // $("#second").toggle(5000, function(){
  //   console.log("meow");
  // });
  // $("#second").slideUp(2000, function(){
  //   $("#second").slideDown(2000);
  // });
  // endlessSlide($("#second"));
  // endlessSlide($(".container").children().last());
  // endlessSlide($(".container").children().last().prev().prev());

  $("#second").css("color", "red");
  $("#second").css({
    color : "red",
    fontSize : "150px"
  });
  endlessSlide($("#second"));
}

function endlessSlide(element){
  element.slideToggle(3000, function(){
      endlessSlide(element);
  });
}

function addEventListeners(){
  $(".container").on("mouseover", ".box", function(){
    $(this).addClass("highlight");
  });
  $(".container").on("mouseout", ".box", function(){
    $(this).removeClass("highlight");
  });
  // $(".container").on("mouseover", ".box", function(){
  //   // $(this).toggleClass("highlight");
  //   $(this).fadeToggle();
  // });
  // $(".container").on("mouseout", ".box", function(){
  //   // $(this).toggleClass("highlight");
  //   $(this).fadeToggle();
  // });
}
