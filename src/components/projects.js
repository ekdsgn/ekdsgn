import Carousel from "./carousel";
import Card from "./card";


const Project = ({ title, imgSrc }) => {


  const cards = 5;
  console.log(imgSrc);

  
  return (
    <div className="proj-ctn">
      <h3>{title}</h3>

      <div className="proj-carousel">

        <Carousel options={{ infinite: false }}>
        {imgSrc.map((src, index) => (
          <Card key={index} src={src} index={index + 1}/>
        ))}
        </Carousel>

        

      </div>
    </div>
  )
}

export default Project;