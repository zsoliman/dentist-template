import tooth from "../media/tooth.mp4";
import xray from "../media/xray.jpg";


const LandingPage = ({ homeRef, servicesRef, productsRef, aboutRef }) => {
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



      <div ref={productsRef} className='landingpage'>
        <h1 style={{ paddingTop: '10vh' }}>Products Div</h1>
      </div>



      <div ref={aboutRef} className="contact">
        <h1
          style={{ paddingTop: '10vh' }}
        >Contact Us Today!</h1>
        <h3>(999)999-9999</h3>
        <h3>We're located at</h3>
        <h3>123-56 Main Street</h3>
        <h3>Brooklyn, NY</h3>
        <h3>11234</h3>
      </div>


      <div className="insurance-div">
        <h1>Insurances We Accept</h1>
        <h3>We accept most major insurance providers, including:</h3>
        <div className="insurance-list">

          <img className="insurance-img col-4" src="https://millbridgedentistry.com/wp-content/uploads/2021/06/united-healthcare-logo-millbridge-dentistry.png" />
          <img className="insurance-img col-4" src='https://millbridgedentistry.com/wp-content/uploads/2021/06/anthem-millbridge-dentistry.svg' />
          <img className="insurance-img col-4" src="	https://millbridgedentistry.com/wp-content/uploads/2021/06/cigna-logo-millbridge-dentistry.png" />

        </div>
      </div>

    </div>

  );
};

export default LandingPage;
