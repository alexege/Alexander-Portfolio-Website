$(document).ready(function(){
    console.log("Document loaded successfully");


    






    var num_rows = $(window).width() / 175;
    
    var num_hex = $(window).height() / 200;

    var offset = 5;

    //Dynamically set added number depending on screen width
    
    for(var i = 0; i < num_rows/2 + offset; i++){
        if(i <= 0){
            $(".container").append(`<div class="grid-cont grid-container${i}"></div>`);
        } else {
            $(".container").append(`<div class="grid-cont grid-container${i}" style="margin-left: 71px"></div>`);
        }   
        for(var j = 0; j < num_hex + 3; j++){
            $(`.grid-container${i}`).append(`
                <div class="grid-item">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='200' height='200'>
                        <defs>
                            <pattern id="img0" patternUnits="userSpaceOnUse" width="100" height="100">
                            </pattern>
                        </defs>
                        <path d='M64 32 L48 4 L16 4 L0 32 L16 60 L48 60 Z'/>
                    </svg>
                </div>
            `)
        }        
    }
    
    for(var i = 0; i < num_rows/2 + offset; i++){
        if(i <= 0){
            $(".container2").append(`<div class="grid-cont grid-container2${i}"></div>`);
        } else {
            $(".container2").append(`<div class="grid-cont grid-container2${i}" style="margin-left: 71px"></div>`);
        }   
        for(var j = 0; j < num_hex + 3; j++){
            $(`.grid-container2${i}`).append(`
                <div class="grid-item">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='200' height='200'>
                        <defs>
                            <pattern id="img0" patternUnits="userSpaceOnUse" width="100" height="100">
                            </pattern>
                        </defs>
                        <path d='M64 32 L48 4 L16 4 L0 32 L16 60 L48 60 Z'/>
                    </svg>
                </div>
            `)
        }        
    }

    // for(var i = 0; i < num_rows; i++){
    //     for(var j = 0; j < num_hex; j++){
    //         $(".container").append(`<p class="${i}">Row row row row</p>`);
    //     }
    //     $(".container").append(`<p class="${j}">Hex</p>`);
    // }

    console.log($(window).width());

    $("#ajax_about_page").click(function(){
        $.ajax({url: "about.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_projects_page").click(function(){
        $.ajax({url: "projects.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_education_page").click(function(){
        $.ajax({url: "education.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_workhistory_page").click(function(){
        $.ajax({url: "workhistory.html", success: function(result){
            $("#main_content").html(result);
        }});
    });

    $("#ajax_resume_page").click(function(){
        $.ajax({url: "resume.html", success: function(result){
            $("#main_content").html(result);
        }});
    });
});