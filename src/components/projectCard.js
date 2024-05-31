const Card = ({ index, src }) => {

  console.log(index);
  
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
                <span className="mainT">Kill la Kill</span>
                <span className="subT">Kill la Kill</span>
              </div>
            </div>
          </div>

        </div>
  )
}

export default Card;