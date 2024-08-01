import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { React, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import 'bulma/css/bulma.min.css';

const PCHeader = () => {

  const navigate = useNavigate();
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // const boxes = component.current.querySelectorAll(".box");

      gsap.to('.navbar', {
        opacity: 1,
        display: 'flex',

        scrollTrigger: {
          trigger: '.navbar',

          start: "bottom top",
          end: "bottom center",

          toggleActions: "play none none reverse",

          // markers: true
        }
      });



      ScrollTrigger.refresh();

      console.log("Hero ScrollTriggers created.");
    }, component);

    return () => ctx.revert();
  }, []);
  return (

<div ref={component} data-scroll-sticky  className='nav_ctn'>
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        
  
      </a>
    </div>
  
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Projects
        </a>
  
        <a className="navbar-item">
          About Me
        </a>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">

          <div className="buttons">

            <a className="button is-focused">
              <strong>Commission</strong>
            </a>

          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}

export default PCHeader;