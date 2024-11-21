var tl = new TimelineMax({ onComplete: endFrame, repeat: -1, repeatDelay: 3 });
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
    .set("#seatLogo,#text1,#text2,#image2,#aronaLogo,#cta", { opacity: 0, force3D: true })
    .set("#image1,#image2", { x: -37, y: 35, scale: 1.45 })

  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#image1', 3, { x: 0, y: 0, scale: 1, ease: Quad.easeInOut }, "frame1")

  tl.addLabel("frame2", "3.1")
    .to('#image1', 0.5, { opacity: 0, ease: Quad.easeInOut }, "frame2")
    .to('#seatLogo', 0.8, { opacity: 1, ease: Power4.easeInOut }, "frame2+=0.2")
    .to('#text1,#text2', 0.8, { opacity: 1, ease: Power2.easeInOut }, "frame2+=0.2")

  tl.addLabel("frame3", "7")
    .to("#seatLogo,#text1,#text2", 0.5, { opacity: 0, ease: Power2.ease }, "frame3")
    .to('#aronaLogo', 0.8, { opacity: 1, ease: Power4.easeInOut }, "frame3+=0.2")
    .to('#cta', 0.5, { opacity: 1, ease: Power2.easeInOut }, "frame3+=0.6")
}
