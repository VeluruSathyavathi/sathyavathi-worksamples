function animation_300x250() {

    //Endframe
    function endFrame() {
      console.log('endFrame()');
    }

    //Timeline
    var loopCounter = 0;
    var tl = gsap.timeline({ delay: 0, repeat:-1, repeatDelay: globalTimeline.repeatDelay, onComplete: endFrame });

    tl.addLabel("start")
      .to(element.banner, 0, { opacity: 1 }, "start")
      .set(element.image_1, { opacity: 0, scale: 1.8 })
      .set(element.image_2, { opacity: 0, scale: 1.8 })
      .set(element.copy_1, { x: 100, opacity: 0 })
      .set(element.copy_sub1, { x: 100, opacity: 0 })
      .set(element.thirdFrame, { x: -100, opacity: 0  })
      .set(element.cta_1, { opacity: 0 })
      .set(element.bottom_Txt, { x: -100,opacity: 0})
      .set(element.logoImg, { opacity: 0 })
    
    .addLabel("frame_1", "+=0")
      .to(element.image_1, 0.5, { opacity: 1, scale: 1, ease: Power1.easeOut }, "frame_1")
      .to(element.copy_1, 1.5, { opacity: 1, x: 0, ease: Power2.easeOut }, "frame_1")
      .to(element.copy_sub1, 0, { opacity: 0, x: 0}, "frame_1")
      .to(element.logoImg, 1, { opacity: 1,ease: Power2.ease }, "frame_1+=0.5")
    
    .addLabel("frame_2", "+=2")
      .to(element.copy_1, 0, { opacity: 0, ease: Power2.easeOut }, "frame_2")
      // .to(element.image_2, 0.5, { opacity: 1, scale: 1, ease: Power1.easeOut }, "frame_2")
      .to(element.copy_sub1, 1, { opacity: 1, x: 0, ease: Power2.easeOut}, "frame_2+=0.5")
    
    .addLabel("frame_3", "+=2")
      .to(element.copy_sub1, 0, { opacity: 0 }, "frame_3")
      .to(element.logoImg, 0, { opacity: 0}, "frame_3")
      .to(element.image_1, 0, { opacity: 0}, "frame_3")
      .to(element.thirdFrame, 1, { opacity: 1, x: 0, ease: Power2.easeOut}, "frame_3+=0.5")
      .to(element.cta_1, 1, { opacity: 1}, "frame_3+=1")
      .to(element.bottom_Txt, 1, { x: 0, ease: Power3.easeOut, opacity: 1}, "frame_3+=1.5")

      .add(function () {
        console.log('tl:', tl.iteration());
        if (tl.iteration() - 1 == globalTimeline.repeat) {
          console.log('END');
          tl.pause()
        }
      })
  }