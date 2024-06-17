import Hero from "../components/hero";
import Projects from "../components/projects";


const Home = () => {
  return (
    <>
      <div className="hero-ctn">
        <Hero />
      </div>

      <div>
        <Projects title="Featured Projects"/>
      </div>


      <div>
        <Projects title="All Projects"/>
      </div>

      
    </>

  )

}

export default Home; 