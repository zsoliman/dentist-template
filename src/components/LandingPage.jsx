import tooth from "../media/tooth.mp4";
import xray from "../media/xray.jpg";


const LandingPage = ({ homeRef }) => {
  return (

    <div ref={homeRef}>
      <div className="title col-6 col-s-9">
        <h1>Your Office Name</h1>
        <h3>"Your Slogan, because teeth are teeth"</h3>

      </div>

      {/* <div className="video-div">
        <video className="video" autoPlay loop muted>
          <source src={tooth} type="video/mp4" />
        </video>
      </div> */}

    </div>



  );
};

export default LandingPage;
