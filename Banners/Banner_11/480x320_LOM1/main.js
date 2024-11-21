var tl = new TimelineLite();

function obj(item) {
  return document.getElementById(item);
}

function init() {
  startAd()
}

function startAd() {

  tl.to("#logo", {
    duration: 1,
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "+=0");
  tl.to("#header", {
    duration: 1,
    // y: "50px",
    scale: 1,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=1");

  tl.to(".text1 .line", {
    duration: 0.5,
    y: 0,
    opacity: 1,
    stagger: 0.1,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0.5");

  tl.to(".text1", {
    duration: 0.5,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "+=2.2");



  tl.to(".text2 .line", {
    duration: 0.8,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0.2");

  tl.to(".text2", {
    duration: 1,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "+=2.2");


  tl.to("#score", {
    duration: 1,
    autoAlpha: 1,
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0");
  tl.to(".text3", {
    duration: 1,
    autoAlpha: 1,
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0.8");


  tl.to(["#score", ".text3"], {
    duration: 0.8,
    autoAlpha: 0,
    y: "-200px",
    stagger: 0.1,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "+=2.2");


  tl.to([".txt4", ".txt5"], {
    duration: 0.5,
    autoAlpha: 1,
    y: 0,
    stagger: 0.2,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0.4");

  tl.to([".cta"], {
    duration: 1,
    autoAlpha: 1,
    x: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=0.7");
  tl.to(["#textcta"], {
    duration: 1,
    autoAlpha: 1,
    x: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "-=1");


  tl.to("#overlay", {
    duration: 0.8,
    width: "151px",
    autoAlpha: 1,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 ")
  }, "+=0");


  tl.to("#overlay", {
    duration: 0.8,
    autoAlpha: 0,
    ease: CustomEase.create("custom", "M0,0 C0.4,0 0.2,1 1,1 "),
    onComplete: restart
  }, "+=0");

}

var initial = 1;
var maxLoop = 2;

function restart(){
  if (initial != maxLoop){
    setTimeout(function(){
      initial++;
      tl.restart()
    }, 1000)
  }
}



window.addEventListener("load", init);
