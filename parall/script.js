var widthFrame = winH*2*7;
$(".mainframe").css("height", winH);
$(".mainframe").css("width", widthFrame);
$(".sect").css("height", winH);
$(".sect:eq(0)").css("width",widthFrame);
$(".main").css("height", winH);









for(var i=0; i<$(".stage").length-2; i++){
    $(".stage:eq("+i+")").css("left",i*winH*2.06);
    $(".stage:eq("+i+")").css("width",winH*2.06);
}

$(".stage:eq("+2+")").css("left",(2+0.5)*winH*2.06);
$(".stage:eq("+2+")").css("width",winH*2.06);
$(".stage:eq("+3+")").css("left",(4)*winH*2.043);
$(".stage:eq("+3+")").css("width",winH*2.06);

var randLeft = 0;
var randLeft2 = 0
for(var i=0; i<$(".cloud").length; i++){
    if(Math.random()>0.5){
        coof = 1
    }else{
        coof= -1;
    }
    randLeft += Math.random()*600-30;
    randTop = Math.random()*80*coof +50
    $(".cloud:eq("+i+")").css({
        "top": randTop
    });
    $(".cloud:eq("+i+")").css({
        "left": randLeft
    });
    var rand = Math.random();
    $(".cloud:eq("+i+")").css({
        "width": rand*50+20
    });
    $(".cloud:eq("+i+")").css({
        "height": rand*50+20
    });
    $(".cloud:eq("+i+")").css({

        "background-size": "cover",
        "background-repeat": "round"
    });

}
for(var k=0; k<$(".cloud2").length; k++){
    if(Math.random()>0.5){
        coof = 1
    }else{
        coof= -1;
    }
    randLeft2 += Math.random()*400-30;
    randTop2 = Math.random()*80*coof+70;
    $(".cloud2:eq("+k+")").css({
        "top": randTop2
    });
    $(".cloud2:eq("+k+")").css({
        "left": randLeft2
    });
    var rand = Math.random();
    $(".cloud2:eq("+k+")").css({
        "width": rand*50+60
    });
    $(".cloud2:eq("+k+")").css({
        "height": rand*50+60
    });
    $(".cloud:eq("+k+")").css({

        "background-size": "cover",
        "background-repeat": "round"
    });

}
for(var j=0; j<2; j++){
    var charH = Math.round(winH);

    $(".imgTable11").css({
        "width": winH*2
    }),
        $(".imgTable11").css({
            "height": charH
        });
    $(".imgTable11").css({
        "left": winH*0.2
    });
    $(".imgTable12").css({
        "width": winH*2
    }),
        $(".imgTable12").css({
            "height": charH
        });
    $(".imgTable12").css({
        "left": winH*0.2
    });

}
for(var j=0; j<2; j++){
    var charH = Math.round(winH);

    $(".imgTable21").css({
        "width": winH*2
    })
    $(".imgTable21").css({
        "height": charH
    });
    $(".imgTable21").css({
        "left": winH*0.2
    });
    $(".imgTable22").css({
        "width": winH*2
    })
    $(".imgTable22").css({
        "height": charH
    });
    $(".imgTable22").css({
        "left": winH*0.2
    });

}
for(var j=0; j<2; j++) {
    var charH = Math.ceil(winH * 0.16);

    $(".imgTable31").css({
        "width": charH * 2
    })
    $(".imgTable31").css({
        "height": charH+winH*0.3
    });
    $(".imgTable31").css({
        "left": winH * 1.47
    });
    $(".imgTable31").css({
        "top": charH+winH*0.2
    });
    $(".imgTable32").css({
        "width": charH * 2
    })
    $(".imgTable32").css({
        "height": charH+winH*0.3
    });
    $(".imgTable32").css({
        "left": winH * 1.47
    });
    $(".imgTable32").css({
        "top": charH+winH*0.2
    });
    $(".imgTable33").css({
        "width": charH * 2
    })
    $(".imgTable33").css({
        "height": charH+winH*0.3
    });
    $(".imgTable33").css({
        "left": winH * 1.52
    });
    $(".imgTable33").css({
        "top": charH+winH*0.2
    });

    $(".chair").css({
        "width": charH * 2
    })
    $(".chair").css({
        "height": charH+winH*0.3
    });
    $(".chair").css({
        "left": winH * 1.55
    });
    $(".chair").css({
        "top": charH+winH*0.3
    });

    $(".tab").css({
        "width": charH * 6
    })
    $(".tab").css({
        "height": charH+winH*0.25
    });
    $(".tab").css({
        "left": winH * 1.15
    });
    $(".tab").css({
        "top": charH*3.1
    });
}
$(".wall").css({
    "width": charH * 6.45
})
$(".wall").css({
    "height": charH+winH*1
});
$(".wall").css({
    "left": winH * 2.06
});
$(".wall").css({
    "top": -charH*0.65
});


$(".imgTable41").css({
    "left": winW*0.01
});
$(".imgTable41").css({
    "bottom": Math.round(charH*1.2)
});
var vv = winH/976;
$(".imgTable41").css({
    "transform": "scale(" +  vv + ")"
});




$(".imgTable42").css({
    "left": winW*0.01
});
$(".imgTable42").css({
    "bottom": Math.round(charH*1.2)
});

$(".imgTable42").css({
    "transform": "scale(" +  vv + ")"
});


$(".imgTable51").css({
    "left": winW*0.01
});
$(".imgTable51").css({
    "bottom": Math.round(charH*1.4)
});

$(".imgTable51").css({
    "transform": "scale(" +  vv + ")"
});


$(".imgTable52").css({
    "left": winW*0.01
});
$(".imgTable52").css({
    "bottom": Math.round(charH*1.4)
});

$(".imgTable52").css({
    "transform": "scale(" +  vv + ")"
});



$(".c1").css({
    "width": charH * 1.67
})
$(".c1").css({
    "height": charH+winH*0.35
});
$(".c1").css({
    "left": 0
});
$(".c1").css({
    "top": charH+winH*0.3
});

$(".c1s").css({
    "width": charH * 1.67
})
$(".c1s").css({
    "height": charH+winH*0.35
});
$(".c1s").css({
    "left": -charH*0.8
});
$(".c1s").css({
    "top": charH+winH*0.3
});


$(".c2").css({
    "width": charH * 1.67
})
$(".c2").css({
    "height": charH+winH*0.35
});
$(".c2").css({
    "left": 0
});
$(".c2").css({
    "top": charH+winH*0.3
});


$(".c3").css({
    "width": charH * 1.67
})
$(".c3").css({
    "height": charH+winH*0.35
});
$(".c3").css({
    "left": 0
});
$(".c3").css({
    "top": charH+winH*0.3
});


$(".c4").css({
    "width": charH * 1.67
})
$(".c4").css({
    "height": charH+winH*0.35
});
$(".c4").css({
    "left": 0
});
$(".c4").css({
    "top": charH+winH*0.3
});

$(".c5").css({
    "width": charH * 1.67
})
$(".c5").css({
    "height": charH+winH*0.35
});
$(".c5").css({
    "left": charH*0.02
});
$(".c5").css({
    "top": charH+winH*0.3
});


$(".charFace2").css({
    "width": charH*1.1
})
$(".charFace2").css({
    "height": charH*1.4
});
$(".charFace2").css({
    "left": charH*0.415
});
$(".charFace2").css({
    "top": charH*2.85
});


$(".charFace1").css({
    "width": charH*1.1
})
$(".charFace1").css({
    "height": charH*1.4
});
$(".charFace1").css({
    "left": charH*0.415
});
$(".charFace1").css({
    "top": charH*2.85
});

$(".charFace2s").css({
    "width": Math.round(charH*1.1)
})
$(".charFace2s").css({
    "height": Math.round(charH*1.4)
});
$(".charFace2s").css({
    "left": Math.round(-charH*0.4)
});
$(".charFace2s").css({
    "top": Math.round(-charH*0.35)
});





$(".dialog1").css({
    "width": charH*2.2
})
$(".dialog1").css({
    "height": charH*1.4
});

$("#dialog1").css({
    "left": charH*8.2
});
$("#dialog1").css({
    "top": charH*0.8
});
$(".dialog2").css({
    "width": charH*2.2
})
$(".dialog2").css({
    "height": charH*1.4
});
$(".dialog2").css({
    "left": charH*1
});
$(".dialog2").css({
    "top": charH*1.8
});


$(".dialog3").css({
    "width": charH*2.2
})
$(".dialog3").css({
    "height": charH*1.4
});
$(".dialog3").css({
    "left": charH*11
});
$(".dialog3").css({
    "top": charH*1.5
});

$("#obj-0-1").css({
    "left": charH*10
});
$("#obj-0-1").css({
    "top": charH*1
});
$("#obj-0-3").css({
    "left": charH*10
});
$("#obj-0-3").css({
    "top": charH*1
});

$("#obj-0-5").css({
    "left": charH*10
});
$("#obj-0-5").css({
    "top": charH*1
});






$("#obj-1-1").css({
    "left": charH*2
});
$("#obj-1-1").css({
    "top": charH*-3.5
});

$("#obj-1-3").css({
    "left": charH*2
});
$("#obj-1-3").css({
    "top": charH*-3.5
});





$("#dialog7").css({
    "left": charH*3
});
$("#dialog7").css({
    "top": charH*1
});
$("#dialog8").css({
    "left": charH*5.5
});
$("#dialog8").css({
    "top": charH*-1.5
});




$("#friend1").css({
    "width": charH*2
})
$("#friend1").css({
    "height": charH*3.2
});
$("#friend1").css({
    "left": charH*1
});
$("#friend1").css({
    "top": charH*-2.3
});
$("#friend2").css({
    "width": charH*2
})
$("#friend2").css({
    "height": charH*3.2
});
$("#friend2").css({
    "left": charH*1
});
$("#friend2").css({
    "top": charH*-2.3
});




$(".sun").css({
    "left": charH*55
});
//$(".sect:eq(1)").css("width",1);

//
//$(window).resize(function() {
//}

//setNavDots(0);
//setNavDotsCss(0.15,0.45);
//setParalaxScale(0.3,32,31);



//$("div.navDot").click(dotDir(1900,"easeInOutCirc"));
//$(window).click(function(){
//    // alert(leftChecker())
//})
var key1 = 0;
var key2 = 0;
var key3 = 0;
var key4 = 0;

var fG = setInterval(function(){


    var k = key1%2
    var j = (key1+1)%2
    $("#imgTable2"+k).css({
        "opacity" : 1
    }),
        $("#imgTable2"+j).css({
            "opacity" : 0
        })
    key1=key1+1

},400)


var sG = setInterval(function(){


    var k = key3%2
    var j = (key3+1)%2
    $("#imgTable4"+k).css({
        "opacity" : 1
    }),
        $("#imgTable4"+j).css({
            "opacity" : 0
        })
    key3=key3+1

},400)


var tG = setInterval(function(){
    var k = key4%2
    var j = (key4+1)%2
    $("#imgTable5"+k).css({
        "opacity" : 1
    }),
        $("#imgTable5"+j).css({
            "opacity" : 0
        })
    key4=key4+1

},400)

//clearInterval(fG)
//clearInterval(sG)
//clearInterval(tG)

$(".load").animate({
    "opacity" : 0
},800,function(){

})

var fs = winH/1000;
$(".dialog1").css({
    "font-size": Math.round(25*fs)
})
$(".dialog2").css({
    "font-size": Math.round(25*fs)
})
$(".dialog3").css({
    "font-size": Math.round(25*fs)
})



// $(".text").text($(".mainframe").offset().left);var vScroll=vertScroll(100);


var limit = [charH*18,charH*31];
var limitScrore = [35,35];
var lastMainLeft= mainLeft*-1;
var toggle = 0;
var score =[0,0];
var index;
var time;
var ccc = "c";
var ch=changeChar(ccc,5,2);
var step = 6;

//function add(e){
//    alert("ss")
//    var event = e || window.event;
//    var v = event.deltaY
//    alert("ss")
//}
//
//add()
deltY = 0;
$(window).mousewheel(function(e){
    //alert(event.deltaY)
    deltY  = e.originalEvent.deltaY;
    set()
})







function set(){
    a = vertScroll;
    b = ch;
    c = setParalaxeLeft;
    varUpdate();
    for( var key in limit){
        if(mainLeft*-1<limit[key]+120){
            index=key;
            time = limitScrore[key]
            //alert(index)
            break;
        }
    }

    onVertScrollStop(index,time);

    if(mainLeft*-1>charH && mainLeft*-1<charH*3){


        var k = key2%2
        var j = (key2+1)%2
        $("#imgTable1"+k).css({
            "opacity" : 1
        }),
            $("#imgTable1"+j).css({
                "opacity" : 0
            })
        key2=key2+1
    }

    if(mainLeft*-1 > charH*1 && mainLeft*-1 < charH*8){

        $("#dialog1").animate({
            "opacity": 1
        },200)
        $(".tip").animate({
            "top":-200
        },500)
    }else{
        $("#dialog1").animate({
            "opacity": 0
        },200)

    }
    if(mainLeft*-1 > charH*22 && mainLeft*-1 < charH*26){
        $(".dialog3").css({
            "opacity": 1
        })
        $(".imgTable33").css({
            "opacity": 1
        })
        $(".imgTable31").css({
            "opacity": 0
        })
    }else{
        $(".imgTable33").css({
            "opacity": 0
        })
        $(".imgTable31").css({
            "opacity": 1
        })
        $(".dialog3").css({
            "opacity": 0
        })
    }

    if(score[0] > 16 ){
        $(".charFace2").css({
            "z-index" : 9
        })
    }else{
        $(".charFace2").css({
            "z-index" : 7
        })
    }
    if(score[1] > 16 ){
        $("#friend2").css({
            "opacity" : 1

        });
        $("#friend1").css({
            "opacity" : 0

        })
    }else{
        $("#friend2").css({
            "opacity" : 0
        });
        $("#friend1").css({
            "opacity" : 1

        })


    }
    if(mainLeft*-1 > charH*22 && mainLeft*-1 < charH*26){
        $(".dialog3").css({
            "opacity": 1
        })
        $(".imgTable33").css({
            "opacity": 1
        })
        $(".imgTable31").css({
            "opacity": 0
        })
    }else{
        $(".imgTable33").css({
            "opacity": 0
        })
        $(".imgTable31").css({
            "opacity": 1
        })
        $(".dialog3").css({
            "opacity": 0
        })
    }

    if(score[1] >= limitScrore[1]){



        $(".c1").css({
            "opacity": 0
        })
        $(".c2").css({
            "opacity": 0
        })
        $(".c3").css({
            "opacity": 0
        })
        $(".c4").css({
            "opacity": 0
        })
        $(".c5").css({
            "opacity": 0
        })
        $(".charFace1").css({
            "opacity": 0
        })
        $(".charFace2").css({
            "opacity": 0
        })


        $(".c1s").css({
            "opacity": 1
        })
        $(".charFace2s").css({
            "opacity": 1
        })
    }
    if(score[1] < limitScrore[1] && score[1] > 0 ){
        $(".c1s").css({
            "opacity": 0
        })
        $(".charFace2s").css({
            "opacity": 0
        })
        $(".c1").css({
            "opacity": 0
        })
        $(".c2").css({
            "opacity": 0
        })
        $(".c3").css({
            "opacity": 0
        })
        $(".c4").css({
            "opacity": 0
        })
        $(".c5").css({
            "opacity": 0
        })

        $(".c1").css({
            "opacity": 1
        })

        $(".charFace1").css({
            "opacity": 1
        })
        $(".charFace2").css({
            "opacity": 1
        })
    }
    //alert(event.deltaY)
    a(30,400, winH*2*4);

    c(30,1.5,2,4,"easeInOutQuad",400);
}

ii=0;

$(window).keydown(
    function(){

       if(event.which == 39) {
           deltY =1;
           ii++;
           if(ii==3){
               set();
               ii=0;
           }
       }
        if(event.which == 37) {
            deltY = -1;
            ii--;
            if(ii==-3){
                set();
                ii=0;
            }
        }
    }
)

if(typeof InstallTrigger !== 'undefined'){
    $(".cloud").css({
        "opacity":0
    })
    $(".cloud2").css({
        "opacity":0
    })
    document.onkeydown = function (e) {
        return false;
    }
}

$(".load").animate({
    "opacity" : 0
},800)
window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

if(window.mobilecheck()==1){
    include('http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js')

}


$(window).resize(function(){

    window.location.href=window.location.href
})

<<<<<<< HEAD
a = "afsagshasdhdfhdah" +
"adh" +
"dh" +
"adh" +
"dvh" +
"vad" +
"vha" +
"dhv" +
"aha" +
"ah" +
"ha"
=======



>>>>>>> next
