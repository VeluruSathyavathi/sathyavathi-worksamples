var tl = new TimelineLite();

function obj(item){
  return document.getElementById(item);
}

/*frame1*/
tl.to([obj('back')], 0.5, {  ease: "Power1.ease"}, "+=0");

/*frame2*/
tl.to([obj('txt1')], 0.5,{autoAlpha: 1,  ease: "Power1.ease"}, "+=1");

/*frame3*/
tl.to([obj('cta')], 0.7, {autoAlpha: 1,  ease: "Power1.ease"}, "+=1");

/*frame4*/
// Fade In 1 - Hold - Fade Out 1
tl.fromTo([obj('clickimg')], 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: "Power1.ease" }, "+=0.5");
tl.to({}, 0.2, {}, "+=0.5");
tl.to([obj('clickimg')], 0.4, { autoAlpha: 0, ease: "Power1.ease" });

// Fade In 2 - Hold - Fade Out 2
tl.fromTo([obj('clickimg')], 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: "Power1.ease" }, "+=0.5");
tl.to({}, 0.2, {}, "+=0.5");
tl.to([obj('clickimg')], 0.4, { autoAlpha: 0, ease: "Power1.ease" });

//Fade In 3 - Hold - Fade Out 3
tl.fromTo([obj('clickimg')], 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: "Power1.ease" }, "+=0.5");
tl.to({}, 0.2, {}, "+=0.5");
tl.to([obj('clickimg')], 0.4, { autoAlpha: 0, ease: "Power1.ease" });

//Fade In 4
tl.fromTo([obj('clickimg')], 0.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: "Power1.ease" }, "+=0.5");


