container = document.getElementById("main-container");

var tl = new TimelineMax({repeat:3, repeatDelay:2}); 
 
 
window.addEventListener("load", function () {
	init();
});

function init() {
	container.style.visibility = "visible";
	show();
}


//Adjust values below for each size
//Background image adjustments

 
//End of adjustments

TimelineLite.prototype.wait = function(position) {
	return this.set({}, {}, position);
};

// Shows the ad.
function show() {
  tl.addLabel('frame1', '+=0')
  .to([txt1], 0.5, { autoAlpha: 1,ease: Linear.easeNone, force3D: true }, 'frame1+=0.5')
  .to([txt1], 0.5, { autoAlpha: 0, ease: Linear.easeNone, force3D: true }, 'frame1+=4')

  .to([txt2], 0.5, { autoAlpha: 1, ease: Linear.easeNone, force3D: true }, 'frame1+=4.5')
  .to([txt2], 0.5, { autoAlpha: 0, ease: Linear.easeNone, force3D: true }, 'frame1+=7.5')

  .to([txt3], 0.5, { autoAlpha: 1, ease: Linear.easeNone, force3D: true }, 'frame1+=8')
  .to([txt3], 0.5, { autoAlpha: 0, ease: Linear.easeNone, force3D: true }, 'frame1+=11')

  .to([cta_container], 0.5, { autoAlpha: 1, ease: Linear.easeNone, force3D: true }, 'frame1+=11.5')
}

// Exit Hnadlers

 
 
