$(document).ready(function(){
    console.log("Document is ready");

    generate();

    var isDown = false;   // Tracks status of mouse button

    $(document).mousedown(function() {
        isDown = true;      // When mouse goes down, set isDown to true
    })
    .mouseup(function() {
        isDown = false;    // When mouse goes up, set isDown to false
    });

    $(".color_button").css({"background-color" : $(this).attr("class")})

    var current_color = "red";
    $(".color_button").click(function(){
        current_color = $(this).attr('color');
        console.log("Current color: " + current_color);
    });
    
    $(".block").mouseover(function(){
    
        if(isDown) {        // Only change css if mouse is down
        $(this).animate({"border-radius" : "0%"}).css({"background-color" : current_color}).animate({"border-radius" : "50%"});
        }
    });

    // $(".block").mousedown(function(){
        
    //         $(this).css({"background-color" : "red"});
    // })  

});



function generate(){
    for(var i = 0; i < 30; i++){
        $(`.matrix`).append(`<div class='row${i}' style="height: 20px"></div>`)
        for(var j = 0; j < 30; j++){
            $(`.row${i}`).append("<div class='block'></div>")
        }

    }
} 