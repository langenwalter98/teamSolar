// test to ensure the file is working as intended
console.log("your index.js file is loaded correctly!");
// global variables that will be used to set a custom color in the .hover functions
hover_color = "#85a0c2"
// underline interaction
$(".sidebar nav p").hover(function(){
    $(this).css("text-decoration-line", "underline");
    }, function(){
    $(this).css("text-decoration-line", "none");
  });
// color change interaction
$(".headerIcons .fa-magnifying-glass").hover(function(){
    $(this).css("color", hover_color);
    }, function(){
    $(this).css("color", "white");
  });
$(".headerIcons .fa-bell").hover(function(){
    $(this).css("color", hover_color);
    }, function(){
    $(this).css("color", "white");
  });
$(".headerIcons .fa-circle-info").hover(function(){
    $(this).css("color", hover_color);
    }, function(){
    $(this).css("color", "white");
  });

// COMMENT COPY