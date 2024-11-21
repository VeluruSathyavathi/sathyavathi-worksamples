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
    .set("#aronaLogo,#cta", { opacity: 0, force3D: true })

  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to("#text1,#text2", 0.5, { opacity: 1, ease: Quad.easeInOut }, "frame1+=0.5")

  tl.addLabel("frame2", "1.8")
    .to('#seatLogo,#text1,#text2', 0.1, { opacity: 0, ease: Power2.easeInOut }, "frame2")
    .to('#aronaLogo', 0.5, { opacity: 1, ease: Power2.easeInOut }, "frame2+=0.1")
    .to('#cta', 0.5, { opacity: 1, ease: Power3.easeInOut }, "frame2+=0.7")

}
