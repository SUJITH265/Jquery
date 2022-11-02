// $("img").attr("src");

//$("a").attr("href","https://www.yahoo.com");

//for(var i=0;i<5;i++)

//$("button").click(function()
//{
 // $("h1").css("color","purple");
//});

//$(document).keypress(function(event){
 //   $("h1").text(event.key);
//});

//$("h1").on("click",function(){
 //   $("h1").css("color","purple");
//});

//hide
//toggle
//fadein
//fadeout
//slideUp
//slideDown
//slideToggle
//
$("button").on("click",function(){
       $("h1").slideUp().slideDown().animate({opacity:0.5});
});