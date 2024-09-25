import ek from '../../assets/video/ek.mp4'
import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const PCHero = () => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // const boxes = component.current.querySelectorAll(".box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-ctn-trigger",
          pin: true,
          start: '+=10 top',
          end: 'bottom +=3000px',
          // markers: true,
          scrub: 2,
        }
      })
      tl.to(".hero-text-1", {
        duration: 12,
        opacity: 0,
      });
      tl.to(".hero-text-2", {
        duration: 6,
        opacity: 0,
      });
      tl.to(".hero-text-3", {
        duration: 6,
        opacity: 0,
      });
      tl.to(".hero-bg video", {
        duration: 6,
        opacity: 0,
      });
      tl.fromTo(".hero-block-1", { x: 0 }, { duration: 1, x: -200 });
      tl.fromTo(".hero-block-2", { top: 500, right: 400 }, { duration: 1, top: 0 });

      // gsap.to('.hero-bg-div-item h1', {

      //   ease: "none",
      //   // duration: 2,
      //   opacity: 1,


      //   scrollTrigger: {
      //     trigger: '.hero-bg',
      //             //Trigger and Viewport
      //     start: "10px top",
      //     end: "bottom bottom",
      //     pin: 'hero-ctn-item',
      //     anticipatePin: 1,
      //                 // onEnter, onLeave, onEnterBack, and onLeaveBack
      //     // toggleActions: "play none none none",
      //     scrub: 2,
      //     markers: true
      //   },


      // });



      ScrollTrigger.refresh();

      console.log("Hero ScrollTriggers created.");
    }, component);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={component} className='hero-ctn'>
      <div className='hero-ctn-trigger'>
        <div className="hero-ctn-item">

          <div className='hero-bg'>
          <video autoPlay muted loop playsInline id="myVideo">
            <source type='video/mp4' src={ek}></source>
          </video>
        </div>
          <div class="hero-block-1">
            <div className="hero-text-1 grid-native">
              <div className='grid-item'>
                <div className='grid-item-div'>
                  <div className='d-item'>
                    <h1>Hi I'm Ekemini</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-text-2 grid-native">
              <div className='grid-item'>
                <div className='grid-item-div'>
                  <div className='d-item spec_p'>
                    <p>Photographer | Graphic Designer | Creative Director </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default PCHero;