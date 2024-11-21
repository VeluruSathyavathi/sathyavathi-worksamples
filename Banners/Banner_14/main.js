var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#logo,#headline1,#headline2,.priceitems,#side-carousel,#full-terms", { opacity: 0, force3D: true })
    .set("#bg", { x: -37, y: 35, scale: 1.45 })


  // // ----------Frame 1 ------------
  tl.addLabel("frame1", "")

    .to('#bg', 1, { x: 0, y: 0, scale: 1, ease: Power2.easeInOut }, "frame1")
    .to('#logo', 0.5, { opacity: 1, ease: Power1.easeInOut }, "frame1+=1")
    .to('#headline1', 0.5, { x: 0, opacity: 1, ease: Quad.easeInOut }, "frame1+=1.6")
    .to('#full-terms', 0.5, { x: 0, opacity: 1, ease: Quad.easeInOut }, "frame1+=1.9")

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "2")
    .to('#headline1', 0.5, { x: 0, opacity: 0}, "frame2+=0.5")
    .to('#headline2', 0.8, { x: 0, opacity: 1, ease: Power2.easeInOut }, "frame2+=0.8")
    .to('.priceitems,#side-carousel', 1.5, { opacity: 1, ease: Power2.easeInOut }, "frame2+=2")

}
