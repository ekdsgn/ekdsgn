import Carousel from "./carousel";
import Card from "./projectCard";
import testImg from "../assets/images/test-proj.png"

const Project = ({ title }) => {


  const cards = 5;
  const projImg = [testImg, testImg, testImg, testImg, testImg];

  return (
    <div className="proj-ctn">
      <h3>{title}</h3>

      <div className="proj-carousel">

        <Carousel options={{ infinite: false }}>
        {Array.from({ length: cards }, (_, index) => (
            <Card key={index} index={index + 1} src={projImg[index]}  />
          ))}
        </Carousel>

        

      </div>
    </div>
  )
}

export default Project;