import tooth from "../media/tooth.mp4";
import closeup from "../media/closeup.jpg";
import toothbrush from "../media/toothbrush.jpg";
import dentist from "../media/dentist.jpg";

const LandingPage = () => {
  return (
    
    <div>
        
      <div className="title">
        <h1>Your Office Name</h1>
        <h3>"Your Slogan, because teeth are teeth"</h3>
      </div>
      
      <div className="video-div">
        <video className="video" autoPlay loop muted>
          <source src={tooth} type="video/mp4" />
        </video>
      </div>

      <div className="landingpage">
        <div>
          <div className="landing-image">
            <img className="photo" alt="closeup" src={closeup} />
          </div>
        </div>

        <div className="landing-text-1">
          <h2>Service You Provide</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dicta fugiat autem inventore, at aspernatur pariatur fuga quaerat
            omnis, asperiores veritatis distinctio quo. Mollitia non ratione
            ipsum accusantium enim eius.
          </h4>
        </div>
      </div>

      <div className="landingpage">

        <div className="landing-text-2">
          <div>
            <h2>Other Service You Provide</h2>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              dicta fugiat autem inventore, at aspernatur pariatur fuga quaerat
              omnis, asperiores veritatis distinctio quo. Mollitia non ratione
              ipsum accusantium enim eius.
            </h4>
          </div>
        </div>

        <div className="landing-image">
          <img className="photo" alt="toothbrush" src={toothbrush} />
        </div>
        
      </div>

        <div className="landingpage">
        <div>
          <div className="landing-image">
            <img className="photo" alt="dentist" src={dentist} />
          </div>
        </div>

        <div className="landing-text-3">
          <h2>More Services You Provide</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dicta fugiat autem inventore, at aspernatur pariatur fuga quaerat
            omnis, asperiores veritatis distinctio quo. Mollitia non ratione
            ipsum accusantium enim eius.
          </h4>
        </div>
      </div>

      <div className="insurance-div">
        <h1>Insurances We Accept</h1>
        <h3>We accept most major insurance providers</h3>
        <div className="insurance">
        
        <img className="insurance-img" src="https://millbridgedentistry.com/wp-content/uploads/2021/06/united-healthcare-logo-millbridge-dentistry.png" />
        <img className="insurance-img" src='https://millbridgedentistry.com/wp-content/uploads/2021/06/anthem-millbridge-dentistry.svg' />
        <img className="insurance-img" src="	https://millbridgedentistry.com/wp-content/uploads/2021/06/cigna-logo-millbridge-dentistry.png" />
      
        </div>
      </div>

      <div className="contact">
        <h1>Contact Us Today!</h1>
        <h3>(999)999-9999</h3>
        <h3>We're located at</h3>
        <h3>123-56 Main Street</h3>
        <h3>Brooklyn, NY</h3>
        <h3>11234</h3>
      </div>

      </div>
      
  );
};

export default LandingPage;
