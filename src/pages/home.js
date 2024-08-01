import Hero from "../components/hero";
import Projects from "../components/projects";
import About from "../components/about"
import useLocoScroll from "../hooks/useLocoScroll";
import Header from "../components/header";


const Home = () => {

  useLocoScroll(true);

  return (
    <>
        <main data-scroll-container className="home">
          {/* ...your app */}
          <Header />
          
          <Hero />

          <About />
        </main>
    </>

  )

}

export default Home; 