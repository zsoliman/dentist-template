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
      
        <video className="video" autoPlay loop muted>
          <source src={tooth} type="video/mp4" />
        </video>




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
          <h2>Other Services You Provide</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dicta fugiat autem inventore, at aspernatur pariatur fuga quaerat
            omnis, asperiores veritatis distinctio quo. Mollitia non ratione
            ipsum accusantium enim eius.
          </h4>
        </div>
      </div>

      </div>
      
  );
};

export default LandingPage;
