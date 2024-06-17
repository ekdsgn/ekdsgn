import Header from "./header"


const Hero = () => {
  return (
    <div className="hero-content">
        <div className="hero-head">
          <Header />
        </div>


        <div className="hero-foot">
          <h2>EKDSGN</h2>
          <p>Photographer, Graphic Designer, Creative Director</p>

          <div>
            <button className="hero-btn"><span id="button-txt">Contact Me</span></button>
          </div>
        </div>
      </div>
  )
}

export default Hero;