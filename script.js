var toggle;
function ToggleMenu(){
    if(toggle){
        $(".project_hex1").animate({"top" : "-=75px"}, 2000)
        $(".project_hex2").animate({"left" : "+=75px", "top" : "+=75px"}, 2000)
        $(".project_hex3").animate({"left" : "-=75px", "top" : "+=75px"}, 2000)
        toggle = false;
    } else {
        $(".project_hex1").animate({"top" : "+=75px"}, 2000)
        $(".project_hex2").animate({"left" : "-=75px", "top" : "-=75px"}, 2000)
        $(".project_hex3").animate({"left" : "+=75px", "top" : "-=75px"}, 2000)
        toggle = true;
    }
}

$(".email").css({"opacity":"0"});
$(".media-links").css({"opacity":"0"});
$(".navbar").css({"opacity":"0"});
$(".corner-bottom-left").css({"opacity":"0"});
$(".corner-bottom-right").css({"opacity":"0"});
$(".corner-top-right").css({"opacity":"0"});
$(".corner-top-left").css({"opacity":"0"});

// $(".hexagon").hover(function(){
//     if($(this).hasClass('hover_filled')){
//         $(this).animate({"opacity":"0"});
//         $(this).removeClass('hover_filled');
//     } else {
//         $(this).animate({"opacity":"1"});
//         $(this).addClass('hover_filled');
//     }
// });
var counter = 0;
$(".hexagon").click(function(){
    if($(this).hasClass('filled')){
        $(this).css({"fill":"none"})
        $(this).removeClass('filled');
        $(this).addClass('disappear');
    } else {
        counter += 1;
        $(this).css({"fill":"rgb(6,174,226, 0.25)"})
        $(this).addClass('filled');
        $(this).removeClass('disappear');
    }
    // console.log("coutner:", counter);
    // if(counter > 6){
    //     $(".hexagon:hover").css({"stroke":"lime", "fill":"black"});
    // }
});

$(document).ready(function(){
    // hideAllHexagons();
    // staggeredDissapear();
    // staggeredReappear();
    // randomlyDissapear();
    // hideOdd();
    // hideEven();
    // spiralHideShow();
    // colorwavefill();
    // colorwavestroke();
    // randomFade();
    // randFill();
    // singleRandFill();
    // setInterval(randomFade, 10000);
    // setInterval(randFade, 100);
    
    moveHexToFront();
    // hideOdd();

    $(".enter_hex").click(function(){
        console.log("Staggered Dissapear");
        staggeredDissapear();

        // $(".fade_main").animate({"opacity":"0"});

        $(".nameContainer").children().css({"letter-spacing":"75px"});
        $(".nameContainer").children().stop().animate({"letter-spacing":"25px", "top":"5%", "opacity":"0"},2000);
        $(".nameContainer").animate({"top":"-=75px"}, 3000)
        $(".glitch").css({"opacity":"0.1"});

        setTimeout(function(){
            console.log("This fadeout");
            $(this).fadeOut();

            for(var i = 1; i < 8; i++){
                $(`.row${i}`).css({"opacity":"0"});
            }

        }, 2000);

       
        
        $(this).fadeOut();
        setTimeout(function(){
            $("#ajax_about_page").click();
        }, 2000);
        // hideVisibleHex();
        // randomlyDissapear();
        // moveHexToBack();
    });

    // $(".glow_border").hide()
    // $(".enter_hex").hover(function(){
    //     $(".glow_border").hide().fadeIn(250);
    // }, function(){
    //     $(".glow_border").fadeOut(250);
    // })

    $(".project_hex1").click(function(){
        console.log("Content");
    })

    // var mouseIsDown = false;
    // $(document).mousedown(function(){
    //     console.log("MOuse is down");
    //     mouseIsDown = true;
    // }).mouseup(function(){
    //     console.log("MOuse is uP");
    //     mouseIsDown = false;
    // })

    function fadeReverse(){
        for(var i = 115; i > 0; i--){
            $(`.hex${i}`).animate({"opacity" : "1"}, 100 * i);
        }
    }

    function randFade(){
        var rand_hex = Math.ceil(Math.random()*114);
        var rand_time = Math.random()*10000;
        console.log("hex " + rand_hex);
        $(`.hex${rand_hex}`).animate({"opacity" : "0"}, rand_time).delay(rand_time).animate({"opacity" : "1"}, rand_time);
    }

    function randomFade(){
        console.log("RandomFade()");
        for(var i = 1; i < 114; i++){
            var rand_1 = Math.random()*10000;
            var rand_2 = Math.random()*10000;
            $(`.hex${i}`).delay(rand_2).animate({"opacity" : "0"}, rand_1).delay(rand_2).css({"opacity" : rand_1});
        }
    }
    
    function singleRandFill(){
        var rand = "#0000ff";
        $(document).mousedown(function(){
            var colorR = Math.floor((Math.random() * 256));
            var colorG = Math.floor((Math.random() * 256));
            var colorB = Math.floor((Math.random() * 256));
            rand = `rgb(${colorR}, ${colorG}, ${colorB})`;
            // var back = ["#ff0000","#00ff00","#0000ff"];
            // rand = back[Math.floor(Math.random() * back.length)];
        return rand;
    })

    // $(".hexagon").hover(function(){
    //     if(mouseIsDown){
    //         $(this).parent().css({"stroke" : "white"});
    //         if($(this).attr("isStroked") == "true"){
    //             console.log("Is true");
    //             $(this).css({"fill" : rand})
    //         }

    //         console.log($(this).attr("stroke-dashoffset"))
    //         $(this).animate({"stroke-dashoffset" : "0"});
    //         $(this).attr("isStroked", "true");
    //     }
    // });
    }



    // Randomly fill each hex with a color
    function randFill(){
    $(".hexagon").hover(function(){
        if(mouseIsDown){
            var rand_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

            if($(this).attr("isStroked") == "true"){
                console.log("Is true");
                $(this).css({"fill" : rand_color})
            }

            console.log($(this).attr("stroke-dashoffset"))
            $(this).animate({"stroke-dashoffset" : "0"});
            $(this).attr("isStroked", "true");
        }
    });
    }

    // $('body').on('click','.project_hex1',function(){
        
    // })

    // var toggle = true;
    // $("body").on('click', 'img', function(){
    //     $(this).css("stroke", "2px solid yellow");
    //     if(toggle){
    //         $(".project_hex1").stop().animate({"top" : "-=75px"}, 2000)
    //         $(".project_hex2").stop().animate({"left" : "+=75px", "top" : "+=75px"}, 2000)
    //         $(".project_hex3").stop().animate({"left" : "-=75px", "top" : "+=75px"}, 2000)
    //         toggle = false;
    //     } else {
    //         $(".project_hex1").stop().animate({"top" : "+=75px"}, 2000)
    //         $(".project_hex2").stop().animate({"left" : "-=75px", "top" : "-=75px"}, 2000)
    //         $(".project_hex3").stop().animate({"left" : "+=75px", "top" : "-=75px"}, 2000)
    //         toggle = true;
    //     }
    // });

    // .project_hex1 {
    //     position: absolute;
    //     z-index: 999999;
    //     left: calc(50% - 100px);
    //     top: calc(50vh - 87.5px - 177px);
    // }
    // .project_hex2 {
    //     position: absolute;
    //     z-index: 100;
    //     left: calc(50% - 100px + 150px);
    //     top: calc(50vh - 2px);
    // }
    // .project_hex3 {
    //     position: absolute;
    //     z-index: 100;
    //     left: calc(50% - 100px - 150px);
    //     top: calc(50vh - 2px);
    // }
    // .project_hex4 {
    //     position: absolute;
    //     z-index: 100;
    //     left: calc(50% - 100px);
    //     top: calc(50vh - 89.5px);
    // }


    // var toggle = true;
    $('body').on('click','.edu_hex',function(){    
        $(".edu_hex5").html($(this).html());
        var selection = "";
        if($(this).attr('name') == "Python"){
            selection = "Python";
        } else if ($(this).attr('name') == "Webfunds"){
            selection = "Webfunds";
        } else if ($(this).attr('name') == "CSharp"){
            selection = "CSharp";
        } else if ($(this).attr('name') == "Mean"){
            selection = "Mean";
        }
        // console.log($(this).attr('name'));
        
        // if(toggle){
            $(".edu_hex1").finish().animate({"top" : "-=75px"},1000).fadeOut();
            $(".edu_hex2").finish().fadeOut(1000);
            $(".edu_hex3").finish().animate({"left" : "+=75px", "top" : "+=75px"}, 1000).fadeOut();
            $(".edu_hex4").finish().animate({"left" : "-=75px", "top" : "+=75px"}, 1000).fadeOut();
            $(".hex1").stop().delay(100).fadeOut();
            $(".hex2").stop().delay(200).fadeOut();
            $(".hex3").stop().delay(300).fadeOut();
            $(".hex4").stop().delay(400).fadeOut();
            $(".hex5").stop().delay(500).fadeOut();
            $(".hex6").stop().delay(600).fadeOut();
            $(".hex7").stop().delay(700).fadeOut();
            
            $(".hex8").stop().delay(1250).fadeOut();
            $(".hex10").stop().delay(1250).fadeOut();
            $(".hex12").stop().delay(1250).fadeOut();
            $(".hex14").stop().delay(1250).fadeOut();
            $(".hex16").stop().delay(1250).fadeOut();
            $(".hex18").stop().delay(1250).fadeOut();
            
            $(".hex9").stop().delay(2000).fadeOut();
            $(".hex11").stop().delay(2000).fadeOut();
            $(".hex13").stop().delay(2000).fadeOut();
            $(".hex15").stop().delay(2000).fadeOut();
            $(".hex17").stop().delay(2000).fadeOut();
            $(".hex19").stop().delay(2000).fadeOut();
            
            $(".hex20").stop().delay(2500).fadeOut();
            $(".hex21").stop().delay(2500).fadeOut();
            $(".hex22").stop().delay(2500).fadeOut();
            $(".hex23").stop().delay(2500).fadeOut();
            $(".hex24").stop().delay(2500).fadeOut();
            $(".hex25").stop().delay(2500).fadeOut();
            $(".hex26").stop().delay(2500).fadeOut();
            $(".hex27").stop().delay(2500).fadeOut();
            $(".hex28").stop().delay(2500).fadeOut();
            $(".hex29").stop().delay(2500).fadeOut();
            $(".hex30").stop().delay(2500).fadeOut();
            $(".hex31").stop().delay(2500).fadeOut();
            $(".hex32").stop().delay(2500).fadeOut();
            $(".hex33").stop().delay(2500).fadeOut();
            $(".hex34").stop().delay(2500).fadeOut();
            $(".hex35").stop().delay(2500).fadeOut();
            $(".hex36").stop().delay(2500).fadeOut();
            $(".hex37").stop().delay(2500).fadeOut();
            $(".hex38").stop().delay(2500).fadeOut();

            $(".education-content").hide().append(`<h2>${selection}</h2>`).append($(`.${selection}-description`)).delay(1000).fadeIn(1000);
            // $(`.${selection}-description`).animate({"opacity":"1"});
            $(`.${selection}-description`).css({"display" : "block"});
            toggle = false;
        // } else {
        //     $(".edu_hex1").stop().animate({"top" : "+=75px"}, 2000)
        //     $(".edu_hex3").stop().animate({"left" : "-=75px", "top" : "-=75px"}, 2000)
        //     $(".edu_hex4").stop().animate({"left" : "+=75px", "top" : "-=75px"}, 2000)
        //     toggle = true;
        // }
    })

    function bringBackHex(){
        $(".hex1").stop().delay(100).fadeIn();
        $(".hex2").stop().delay(200).fadeIn();
        $(".hex3").stop().delay(300).fadeIn();
        $(".hex4").stop().delay(400).fadeIn();
        $(".hex5").stop().delay(500).fadeIn();
        $(".hex6").stop().delay(600).fadeIn();
        $(".hex7").stop().delay(700).fadeIn();
        
        $(".hex8").stop().delay(1250).fadeIn();
        $(".hex10").stop().delay(1250).fadeIn();
        $(".hex12").stop().delay(1250).fadeIn();
        $(".hex14").stop().delay(1250).fadeIn();
        $(".hex16").stop().delay(1250).fadeIn();
        $(".hex18").stop().delay(1250).fadeIn();
        
        $(".hex9").stop().delay(2500).fadeIn();
        $(".hex11").stop().delay(2500).fadeIn();
        $(".hex13").stop().delay(2500).fadeIn();
        $(".hex15").stop().delay(2500).fadeIn();
        $(".hex17").stop().delay(2500).fadeIn();
        $(".hex19").stop().delay(2500).fadeIn();

        $(".hex20").stop().delay(3000).fadeIn();
        $(".hex21").stop().delay(3000).fadeIn();
        $(".hex22").stop().delay(3000).fadeIn();
        $(".hex23").stop().delay(3000).fadeIn();
        $(".hex24").stop().delay(3000).fadeIn();
        $(".hex25").stop().delay(3000).fadeIn();
        $(".hex26").stop().delay(3000).fadeIn();
        $(".hex27").stop().delay(3000).fadeIn();
        $(".hex28").stop().delay(3000).fadeIn();
        $(".hex29").stop().delay(3000).fadeIn();
        $(".hex30").stop().delay(3000).fadeIn();
        $(".hex31").stop().delay(3000).fadeIn();
        $(".hex32").stop().delay(3000).fadeIn();
        $(".hex33").stop().delay(3000).fadeIn();
        $(".hex34").stop().delay(3000).fadeIn();
        $(".hex35").stop().delay(3000).fadeIn();
        $(".hex36").stop().delay(3000).fadeIn();
        $(".hex37").stop().delay(3000).fadeIn();
        $(".hex38").stop().delay(3000).fadeIn();
    }

    $("body").on('click', '.back-button', function(){
        $(".edu_hex1").finish().fadeIn().animate({"top" : "+=75px"},1000)
        $(".edu_hex2").finish().fadeIn(1000);
        $(".edu_hex3").finish().fadeIn().animate({"left" : "-=75px", "top" : "-=75px"}, 1000)
        $(".edu_hex4").finish().fadeIn().animate({"left" : "+=75px", "top" : "-=75px"}, 1000)
        $(".hex1").stop().delay(100).fadeIn();
        $(".hex2").stop().delay(200).fadeIn();
        $(".hex3").stop().delay(300).fadeIn();
        $(".hex4").stop().delay(400).fadeIn();
        $(".hex5").stop().delay(500).fadeIn();
        $(".hex6").stop().delay(600).fadeIn();
        $(".hex7").stop().delay(700).fadeIn();
        
        $(".hex8").stop().delay(1250).fadeIn();
        $(".hex10").stop().delay(1250).fadeIn();
        $(".hex12").stop().delay(1250).fadeIn();
        $(".hex14").stop().delay(1250).fadeIn();
        $(".hex16").stop().delay(1250).fadeIn();
        $(".hex18").stop().delay(1250).fadeIn();
        
        $(".hex9").stop().delay(2500).fadeIn();
        $(".hex11").stop().delay(2500).fadeIn();
        $(".hex13").stop().delay(2500).fadeIn();
        $(".hex15").stop().delay(2500).fadeIn();
        $(".hex17").stop().delay(2500).fadeIn();
        $(".hex19").stop().delay(2500).fadeIn();

        $(".hex20").stop().delay(3000).fadeIn();
        $(".hex21").stop().delay(3000).fadeIn();
        $(".hex22").stop().delay(3000).fadeIn();
        $(".hex23").stop().delay(3000).fadeIn();
        $(".hex24").stop().delay(3000).fadeIn();
        $(".hex25").stop().delay(3000).fadeIn();
        $(".hex26").stop().delay(3000).fadeIn();
        $(".hex27").stop().delay(3000).fadeIn();
        $(".hex28").stop().delay(3000).fadeIn();
        $(".hex29").stop().delay(3000).fadeIn();
        $(".hex30").stop().delay(3000).fadeIn();
        $(".hex31").stop().delay(3000).fadeIn();
        $(".hex32").stop().delay(3000).fadeIn();
        $(".hex33").stop().delay(3000).fadeIn();
        $(".hex34").stop().delay(3000).fadeIn();
        $(".hex35").stop().delay(3000).fadeIn();
        $(".hex36").stop().delay(3000).fadeIn();
        $(".hex37").stop().delay(3000).fadeIn();
        $(".hex38").stop().delay(3000).fadeIn();
        
        for(var i = 39; i<= 62; i++){
            $(`.hex${i}`).stop().delay(3200).fadeIn();
        }

        // $(".education-content").remove(".education-content");            
        $(".education-content").empty()
        // $(".education-content").remove(".Python-description");
        // $(".education-content").remove(".Webfunds-description");
        // $(".education-content").remove(".Mean-description");
        // $(".education-content").remove(".CSharp-description");
        // , .Mean-description, .Webfunds-description, .CSharp-description");            
    });

    $("#ajax_resume_page").click(function(){
        hideVisibleHex();
    });
    $("#ajax_projects_page").click(function(){
        // hideVisibleHex();
    });

    // Check active navitem
    var header = document.getElementById("navbar");
    var btns = header.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
    }

    // $(".hexagon").hover(function(){
    //     var rand_num = Math.random();
    //     $(this).css({"opacity" : "0"}).stop().animate({"opacity" : rand_num}, 2000);
    // })

    function hideVisibleHex(){
        for(var i = 0; i < 63; i++){
            var rand = Math.random()*4000;
            $(`.hex${i}`).fadeOut(rand);
        }
    }

    function moveHexToFront(){
        $("#screen").css({"opacity" : "1"})
        $(".hexagon").animate({"opacity": "0", "z-index" : "999999"});
        staggeredReappear2();
        // animateIn();
    }
    
    function moveHexToBack(){
        console.log("MoveHexToBack start");
        $(".hexagon").css({"opacity": "1", "z-index" : "-1"});
        $("#screen").css({"opacity" : "0", "z-index" : -2})
        $(".enter_hex").css({"opacity" : "0", "z-index" : -20})
        console.log("MoveHexToBack End");
    }
    
    function hideOdd(){
        for(var i = 0; i < 115; i++){
            if(i % 2 == 0){
                $(`.hex${i}`).animate({"opacity" : "0"});
            }
        }
    }
    
    function hideEven(){
        for(var i = 0; i < 115; i++){
            if(i % 2 != 0){
                $(`.hex${i}`).animate({"opacity" : "0"});
            }
        }
    }

    function hideAllHexagons(){
        $(".hexagon").css({"opacity" : "0"});
    }

    function randomlyDissapear(){
        var rand_number = Math.ceil(Math.random()* 115);
        var rand_num = Math.random();
        $(`.hex${rand_number}`).delay(5000).animate({"opacity" : rand_num});
    }

    function finished(){
        // staggeredReappear();
        // randomlyDissapear();
        // hide();
    }

    function spiralHideShow(){
        for(var i = 1; i < 115; i++){
            $(`.hex${i}`).animate({"opacity" : "0"}, 200 * i);
            $(`.hex${i}`).delay(1200).animate({"opacity" : "1"}, 200 * i);
            console.log(`.hex${i}`);
        }
    }

    function spiralHide(){
        for(var i = 1; i < 115; i++){
            $(`.hex${i}`).animate({"opacity" : "0"}, 50 * i);
        }
    }

    function staggeredDissapear(){
        console.log("staggeredDissapear start");
        $(".enter_hex").clearQueue().animate({"opacity": "0"});
        $(".row1").animate({"opacity" : "0"});
        $(".row2").delay(200).animate({"opacity" : "0"});
        $(".row3").delay(400).animate({"opacity" : "0"});
        $(".row4").delay(600).animate({"opacity" : "0"});
        $(".row5").delay(800).animate({"opacity" : "0"});
        $(".row6").delay(1000).animate({"opacity" : "0"});
        $(".row7").delay(1200).animate({"opacity" : "0"});
        $(".row8").delay(1400).animate({"opacity" : "0"});
        setTimeout(function(){
            moveHexToBack();
        }, 2000);
        console.log("staggeredDissapear End");
    }

    function staggeredReappear(){
        console.log("staggeredReappear start");

        // $(`.row1`).finish().animate({"opacity" : "0"});
        // $(`.row2`).finish().delay(200).animate({"opacity" : "0.1"});
        // $(`.row3`).finish().delay(400).animate({"opacity" : "0.15"});
        // $(`.row4`).finish().delay(600).animate({"opacity" : "0.2"});
        // $(`.row5`).finish().delay(800).animate({"opacity" : "0.25"});
        // $(`.row6`).finish().delay(1000).animate({"opacity" : "0.5"});
        // $(`.row7`).finish().delay(1200).animate({"opacity" : "0.75"});
        // $(`.row8`).finish().delay(1400).animate({"opacity" : "1"});

        $(`.row1`).finish().animate({"opacity" : "1"});
        $(`.row2`).finish().delay(200).animate({"opacity" : "1"});
        $(`.row3`).finish().delay(400).animate({"opacity" : "1"});
        $(`.row4`).finish().delay(600).animate({"opacity" : "1"});
        $(`.row5`).finish().delay(800).animate({"opacity" : "1"});
        $(`.row6`).finish().delay(1000).animate({"opacity" : "1"});
        $(`.row7`).finish().delay(1200).animate({"opacity" : "1"});
        $(`.row8`).finish().delay(1400).animate({"opacity" : "1"});
        console.log("staggeredReappear End");
    }

    function staggeredReappear2(){
        console.log("staggeredReappear start");

        // $(`.row1`).finish().animate({"opacity" : "0"});
        // $(`.row2`).finish().delay(200).animate({"opacity" : "0.65"});
        // $(`.row3`).finish().delay(400).animate({"opacity" : "0.7"});
        // $(`.row4`).finish().delay(600).animate({"opacity" : "0.75"});
        // $(`.row5`).finish().delay(800).animate({"opacity" : "0.8"});
        // $(`.row6`).finish().delay(1000).animate({"opacity" : "0.85"});
        // $(`.row7`).finish().delay(1200).animate({"opacity" : "0.9"});
        // $(`.row8`).finish().delay(1400).animate({"opacity" : "1"});
        
        $(`.row1`).finish().animate({"opacity" : "1"});
        $(`.row3`).finish().delay(500).animate({"opacity" : "1"},1000);
        $(`.row5`).finish().delay(500).animate({"opacity" : "1"},3000);
        $(`.row7`).finish().delay(500).animate({"opacity" : "1"},5000);
        
        $(`.row2`).finish().delay(3000).animate({"opacity" : "0.25"},5000);
        $(`.row4`).finish().delay(3000).animate({"opacity" : "0.25"},5000);
        $(`.row6`).finish().delay(3000).animate({"opacity" : "0.25"},5000);
        $(`.row8`).finish().delay(3000).animate({"opacity" : "0.25"},5000);
        console.log("staggeredReappear End");
    }

    function animateIn(){

        $(".row1").finish().animate({"opacity" : "1"}, 1000);
        $(".row2").finish().delay(500).animate({"opacity" : "0.7"}, 1000);
        $(".row3").finish().delay(1500).animate({"opacity" : "0.5"}, 1000);
        $(".row4").finish().delay(2000).animate({"opacity" : "0.4"}, 1000);
        $(".row5").finish().delay(2500).animate({"opacity" : "0.3"}, 1000);
        $(".row6").finish().delay(3000).animate({"opacity" : "0.2"}, 1000);
        $(".row7").finish().delay(3500).animate({"opacity" : "0.1"}, 1000);
        $(".row8").finish().delay(4000).animate({"opacity" : "0.05"}, 1000);
    }

    function hideAllSquares(){
        $(".1").hide().fadeIn(1000);
        $(".2").hide().fadeIn(3000);
        $(".3").hide().fadeIn(1000);
        $(".4").hide().fadeIn(3000);
        $(".5").hide().fadeIn(1000);
        $(".6").hide().fadeIn(3000);
        $(".7").hide().fadeIn(1000);
        $(".8").hide().fadeIn(3500);
        $(".9").hide().fadeIn(1000);
        $(".10").hide().fadeIn(3500);
        $(".11").hide().fadeIn(1000);
        $(".12").hide().fadeIn(3500);
        $(".13").hide().fadeIn(1000);
        $(".14").hide().fadeIn(3500);
        $(".15").hide().fadeIn(1000);
        $(".16").hide().fadeIn(3500);
        $(".17").hide().fadeIn(1000);
        // for(var i = 0; i < 8; i++){
        //     rand = Math.floor(Math.random()*17);
        //     $(`.${rand}`).addClass('hidden');
        // }

        // $(".2").css("opacity","0");
        // $(".3").css("opacity","0");
        // $(".4").css("opacity","0");
        // $(".5").css("opacity","0");
        // $(".6").css("opacity","0");
        // $(".7").css("opacity","0");
        // $(".8").css("opacity","0");
        // $(".9").css("opacity","0");
        // $(".10").css("opacity","0");
        // $(".11").css("opacity","0");
        // $(".12").css("opacity","0");
        // $(".13").css("opacity","0");
        // $(".14").css("opacity","0");

        // $(".block").hover(function(){
        //     $(this).css({"opacity":"1", "border":"1px solid white"}).animate({"opacity":"0"},2000)
        // });

        setInterval(function(){
            $(".0").css("background-color", "rgb(255,0,0,0.85)");
            $(".0").animate({"opacity":"0"},1000).delay(1000).animate({"opacity":"1"},1000);
        }, 500)
    }

    // evenOdd();

    // function evenOdd(){
    //     for(var i = 1; i < 115; i++){
    //         if(i % 2 == 0){
    //             $(`.hex${i}`).css({"stroke" : "white", "fill" : "rgb(255, 255, 100, 0.25)"});
    //         } else {
    //             $(`.hex${i}`).css({"stroke" : "black", "fill" : "black"});
    //         }
    //     }
    // }

    // fadeIn();

    // function fadeIn(){
    //     for(var i = 1; i < 9; i++){
    //         $(`.row${i}`).hide();
    //     }
    //     // $(`.row1`).hide().fadeIn(300, function(){
    //     //     $(`.row2`).hide().fadeIn(300, function(){
    //     //         $(`.row3`).hide().fadeIn(300, function(){
    //     //             $(`.row4`).hide().fadeIn(300, function(){
    //     //                 $(`.row5`).hide().fadeIn(300, function(){
    //     //                     $(`.row6`).hide().fadeIn(300, function(){
    //     //                         $(`.row7`).hide().fadeIn(300, function(){
    //     //                             $(`.row8`).hide().fadeIn(300, function(){
    //     //                                 $(`.row9`).hide().fadeIn(300, function(){
    //     //                                 })
    //     //                             })
    //     //                         })
    //     //                     })
    //     //                 })
    //     //             })
    //     //         })
    //     //     })
    //     // })
    // }


    // $(".hex1").hover(function(){
    //     $(".hexagon").css({"fill" : "red"});
    // })
    // $(".hex2").hover(function(){
    //     $(".hexagon").css({"fill" : "blue"});
    // })
    // $(".hex3").hover(function(){
    //     $(".hexagon").css({"fill" : "green"});
    // })

    function colorwavefill(){
        var random_color_1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_3 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_4 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_5 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_6 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_7 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_8 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

        $(".row1").css({"fill" : random_color_1});
        $(".row2").css({"fill" : random_color_2});
        $(".row3").css({"fill" : random_color_3});
        $(".row4").css({"fill" : random_color_4});
        $(".row5").css({"fill" : random_color_5});
        $(".row6").css({"fill" : random_color_6});
        $(".row7").css({"fill" : random_color_7});
        $(".row8").css({"fill" : random_color_8});

        // $(".row1").delay(2000).fadeOut().css({"fill" : random_color_2}).fadeIn();
    }

    function colorwavestroke(){
        var random_color_1 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_3 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_4 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_5 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_6 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_7 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        var random_color_8 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

        $(".row1").css({"stroke" : random_color_1});
        $(".row2").css({"stroke" : random_color_2});
        $(".row3").css({"stroke" : random_color_3});
        $(".row4").css({"stroke" : random_color_4});
        $(".row5").css({"stroke" : random_color_5});
        $(".row6").css({"stroke" : random_color_6});
        $(".row7").css({"stroke" : random_color_7});
        $(".row8").css({"stroke" : random_color_8});

        // $(".row1").delay(2000).fadeOut().css({"fill" : random_color_2}).fadeIn();
    }


    function rainbowTrigger(){
        for(var i = 1; i < 9; i++){
            var random_r = parseInt(Math.random() * 255);
            console.log("random red: " + random_r);
            var random_g = parseInt(Math.random() * 255);
            console.log("random green: " + random_g);
            var random_b = parseInt(Math.random() * 255);
            console.log("random blue: " + random_b);
            console.log("--------------------------------------");
            // $(`.row${i}`).css({"fill" : `rgb(${random_r}, ${random_g}, ${random_b}`});
            
            var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            $(`.row${i}`).css({"fill" : random_color});
        }
    }

    // $(".hexagon").hover(function(){
    //     // console.log("Hovering!");
    //     // var random_r = parseInt(Math.random() * 255);
    //     // console.log("random red: " + random_r);
    //     // var random_g = parseInt(Math.random() * 255);
    //     // console.log("random green: " + random_g);
    //     // var random_b = parseInt(Math.random() * 255);
    //     // console.log("random blue: " + random_b);
    //     // console.log("--------------------------------------");
    //     // $(this).css({"fill" : `rgb(${random_r}, ${random_g}, ${random_b}`});

    //     // var colors = ['#ff0000', '#00ff00', '#0000ff'];
    //     // var random_color = colors[Math.floor(Math.random() * colors.length)];
    //     // $(this).css({"fill": random_color});
        
    //     var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    //     $(this).css({"fill": random_color});
    // });

    // rainbowTrigger();


    // var random_color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    // $(".hexagon").css({"stroke" : random_color});




    // loadAtRandom();

    function loadAtRandom(){
        var count = 0; 
        var maxDelay = 2500;
        var minSpeed = 1500;
        var maxSpeed = 2000;
        var fadeTo = 1;
    
        $('.hexagon').each(function(){
            var delay = Math.ceil(Math.random() * maxDelay);
            var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
            count++;
            fadeTo = Math.random(0.5, 1);

            $(this).delay(delay).fadeTo(speed, fadeTo, function(){
                count--;
                if (count == 0){
                    onFinish();
                }
            });
        });
        function onFinish() {
            loadContent();
        }  
      }



    //   Hide/Show Media Links
      $(".linkedin-slider, .github-slider, .youtube-slider, .facebook-slider").hide();
      $(".trigger").hover(function(){
        $(this).stop().animate({"padding-left": "8px"}).css({"border-left":"2px solid rgb(6,170,226)"});
        if($(this).attr('name') == 'linkedin'){
          $(".linkedin-slider").stop().fadeIn();
        } else if($(this).attr('name') == 'github'){
          $(".github-slider").stop().fadeIn();
        } else if($(this).attr('name') == 'youtube'){
          $(".youtube-slider").stop().fadeIn();
        } else if($(this).attr('name') == 'facebook'){
          $(".facebook-slider").stop().fadeIn();
        }
      }, function(){
        $(this).stop().animate({"padding-left": "0px"}).css({"border-left":"0px solid rgb(6,170,226)"});  
        $(".linkedin-slider, .github-slider, .youtube-slider, .facebook-slider").fadeOut();
      })
     



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

    // console.log($(window).width());

    $("#ajax_about_page").click(function(){
        $.ajax({url: "about.html", success: function(result){
            console.log("About page is loadig in")
            $("#main_content").html(result);
            // if(state != 1){
            //     // populate background
            // }
            // staggeredReappear2();

            // $(".email").css({"opacity":"0"});
            // $(".media-links").css({"opacity":"0"});
            // $(".navbar").css({"opacity":"0"});
            // $(".corner-bottom-left").css({"opacity":"0"});
            // $(".corner-bottom-right").css({"opacity":"0"});
            // $(".corner-top-right").css({"opacity":"0"});
            // $(".corner-top-left").css({"opacity":"0"});

            setTimeout(function(){
                animateIn();
            }, 2000)
            // bringBackHex();
            // fadeReverse();
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
            fadeReverse();
        }});
    });

    $("#ajax_workhistory_page").click(function(){
        $.ajax({url: "workhistory.html", success: function(result){
            $("#main_content").html(result);
        }});
    });
    $("#ajax_play_page").click(function(){
        $.ajax({url: "playground.html", success: function(result){
            $("#main_content").html(result);
            $(`#ink`).css({"display":"block"});
            $(`#ink`).get(0).play()
            // $(`#ink`).delay(6000).fadeOut(2000);
            spiralHide();
            hideAllSquares();
            // showAllSquares();
        }});
    });

    $("#ajax_resume_page").click(function(){
        $.ajax({url: "resume.html", success: function(result){
            $("#main_content").html(result);
        }});
    });


});

