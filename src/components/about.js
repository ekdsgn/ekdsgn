
import ekLogo from '../assets/images/New-EK-Logo.png'
import Project from './projects';
import { React, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import testImg from "../assets/images/select-cover.webp"
import testImg2 from "../assets/images/mcmurrycover.webp"
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';


const About = (props) => {
  const component = useRef(null);


  useEffect(() => {
    let ctx = gsap.context(() => {
      // const boxes = component.current.querySelectorAll(".box");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-ctn-trigger",
          pin: true,
          start: 'top top',
          end: 'bottom +=3000px',
          markers: true,
          scrub: 2,
        }
      })
      tl.from(".ekLogo", {
        duration: 84,
        opacity: 0,
      });
      tl.from("#option1", {
        duration: 84,
        x: -500,
        opacity: 0,
      });
      tl.from("#option2", {
        duration: 84,
        x: -500,
        opacity: 0,
      });
      tl.from("#option3", {
        duration: 84,
        x: -500,
        opacity: 0,
      });
      tl.from("#option4", {
        duration: 84,
        x: -500,
        opacity: 0,
      });
      tl.from("#option5", {
        duration: 84,
        x: -500,
        opacity: 0,
      });
      tl.from(".proj_sel", {
        duration: 84,
        opacity: 0,
      });
      tl.from(".about-info-div", {
        duration: 84,
        opacity: 0,
        x: 500,
      });

      tl.fromTo(".about-block-1", { x: 0 }, { duration: 1 });

      ScrollTrigger.refresh();

      console.log("Hero ScrollTriggers created.");
    }, component);

    return () => ctx.revert();
  }, []);




  const [selectedOption, setSelectedOption] = useState('option1'); // Default option

  // Function to handle option selection
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  const titles = {
    option1: 'Creative Projects',
    option2: 'Multidisciplinary',
    // Add other options
  };

  const images = {
    option1: [testImg, testImg2, testImg2],
    option2: [testImg, testImg2],
    // Add other images paths
  };

  // const mainT = {
  //   option1: [testImg, testImg2],
  //   option2: [testImg, testImg2],
  //   // Add other images paths
  // };



  return (
    <section ref={component} data-scroll-section className='about-ctn'>

      <div className="about-ctn-trigger">
        <div className="about-ctn-item">


          <div className="about-block-1">
            <div className="hero-text-1 grid-custom">
              <div className='grid-item'>
                <div className='grid-item-div'>
                  <div className='d-item list_settings'>
                    <div className="about-menu">
                      <div className='ekLogo'>
                        <img src={ekLogo} alt='main logo of Ekemini'></img>
                      </div>

                      <div className='about-info'>
                        <div className='list_sel'>
                          <span id='option1' onClick={() => handleOptionClick('option1')}>Creative Director</span>
                          <span id='option2' onClick={() => handleOptionClick('option2')}>Multidisciplinary</span>
                          <span id='option3'>Graphic Designer</span>
                          <span id='option4'>Photographer</span>
                          <span id='option5'>Videographer</span>
                        </div>

                        <div className='about-info-div'>

                          <h1>Select QB<span>Select QB Athletics</span></h1>



                          <span>
                            <li>Select QB</li>
                            <li>Select QB Athletics</li>
                            <li>2023 - 2024</li>
                          </span>

                          <p>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum viverra netus ridiculus cras volutpat vehicula. Massa faucibus vitae ridiculus viverra senectus netus gravida dapibus dolor. Lectus purus etiam sapien odio volutpat euismod torquent.
                          </p>

                        </div>
                      </div>

                    </div>
                  </div>
                  <div className='d-item proj_sel'>
                    <Project title={titles[selectedOption]} imgSrc={images[selectedOption]} />
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

export default About;