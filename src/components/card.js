const Card = ({ index, src, mainT, subT }) => {

  return (
    <div className="proj-card-ctn f-carousel__slide">
          <div className="proj-card">
            <button>
              <img src={src} />
            </button>
          </div>

          <div className="proj-content-ctn">
            <div className="proj-content">
              <span className="proj-num">{index}</span>
              <div className="proj-data">
                <span className="mainT">
                  <li>Select QB</li>
                  <li>Select QB Athletics</li>
                  <li>2023 - 2024</li>
                </span>
                <span className="subT">
                  <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Fermentum viverra netus ridiculus cras volutpat vehicula. Massa faucibus vitae ridiculus viverra senectus netus gravida dapibus dolor. Lectus purus etiam sapien odio volutpat euismod torquent.</p>
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Card;