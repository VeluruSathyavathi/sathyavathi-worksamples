var tl = new TimelineLite();

var date = new Date();
var hour = date.getHours();
var minutes = date.getMinutes();
var time = parseInt(hour + "" + minutes);

function obj(item){
  return document.getElementById(item);
}

function init() {
  // replaceImageLom()

    startAd()
    }

    function startAd(){
      tl.set([obj('cta')], {x:728});

      tl.to([obj('opc')], 0.5, {autoAlpha:0, ease: "Power1.ease"}, "+=0.5");
      tl.to([obj('wrap')], 0.3, {width:0}, "+=3.5");

      tl.to([obj('co2')], 1, {autoAlpha:1, ease: "Power1.ease"}, "+=0");
      // tl.to([obj('wrap7')], 0.3, {width:0}, "+=2");
      // tl.to([obj('co2')], 0.5, {autoAlpha:0, ease: "Power1.ease"}, "-=0.3");
      tl.to([obj('cta')], 0.5, {x:0, ease: "Power1.ease"}, "-=0.5");

    }


            function getLomHour(){
              if(time > 0000 && time <= 0159){
                return "lom1.png";
              }else if(time > 0159 && time <= 0359){
                return "lom2.png";
              }else if(time > 0359 && time <= 0559){
                return "lom3.png";
              }else if(time > 0559 && time <= 0759){
                return "lom1.png";
              }else if(time > 0759 && time <= 0959){
                return "lom2.png";
              }else if(time > 0959 && time <= 1159){
                return "lom3.png";
              }else if(time > 1159 && time <= 1359){
                return "lom1.png";
              }else if(time > 1359 && time <= 1559){
                return "lom2.png";
              }else if(time > 1559 && time <= 1759){
                return "lom3.png";
              }else if(time > 1759 && time <= 1959){
                return "lom1.png";
              }else if(time > 1959 && time <= 2159){
                return "lom2.png";
              }else if(time > 2159 && time <= 2359){
                return "lom3.png";
              }else{
                return "lom1.png";

              }
            }

            function replaceImageLom(){
              document.getElementById('lom1').src = getLomHour();
            }

window.onload = init;
