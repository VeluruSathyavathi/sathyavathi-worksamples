function animation_300x600() {

    //Endframe
    function endFrame() {
      console.log('endFrame()');
    }

    //Timeline
    var loopCounter = 0;
    var tl = gsap.timeline({ delay: 0, repeat: globalTimeline.repeat, repeatDelay: globalTimeline.repeatDelay, onComplete: endFrame });

    tl.addLabel("start")
      .to(element.banner, 0, { opacity: 1 }, "start")
      .set(element.copy_1, { x: 100, opacity: 0 })
      .set(element.copy_sub_2,{ x: 100, opacity: 0 })
      .set(element.scrollbar_container, { bottom: -80, opacity: 0  })
      .set(element.logo, { opacity: 0 })
      .set(element.thirdFrame, { x: -100, opacity: 0  })
      .set(element.cta_1, { opacity: 0 })

      .addLabel("phase_1", "+=0")
        .to(element.copy_1, 1, { opacity: 1, x: 0, ease: Power3.easeOut }, "phase_1")
        .to(element.scrollbar_container, 2, { opacity: 1, bottom: 0, ease: Power4.easeInOut}, "phase_1")
        .to(element.logo, 0.5, { opacity: 1, ease: Power1.easeIn }, "phase_1")

      .addLabel("phase_2", "+=2")
        .to(element.copy_sub_2, 1.5, { opacity: 1, x: 0, ease: Power3.easeOut }, "phase_2")
        .to(element.copy_1, 0.5, { opacity: 0 }, "phase_2")
       
      .addLabel("phase_3", "+=2")
        .to(element.copy_sub_2, 0.5, { opacity: 0 }, "phase_3")
        .to(element.thirdFrame, 1, { opacity: 1, x: 0, ease: Power3.easeOut}, "phase_3")
        .to(element.logo, 0.5, { opacity: 0}, "phase_3")
        .to(element.cta_1, 1, { opacity: 1}, "phase_3+=1")

      .add(function () {
        console.log('tl:', tl.iteration());
        if (tl.iteration() - 1 == globalTimeline.repeat) {
          console.log('END');
          tl.pause()
        }
      });
  }