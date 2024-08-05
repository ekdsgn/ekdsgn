import Header from "./header"
import PCHero from "../PC Components/pcHero"
import MobileHero from "./Mobile Components/mobileHero"

const Hero = () => {


  return (
    <section data-scroll-section>

      <div className="mView">
          <MobileHero />
      </div>

      <div className="pView">
          <PCHero />
        </div>
    </section>

  )
}

export default Hero;