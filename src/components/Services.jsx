import toothbrush from "../media/toothbrush.jpg";
import dentist from "../media/dentist.jpg";
import closeup from "../media/closeup.jpg";

const Services = ({ servicesRef }) => {
    return (
        <div>
            <div className="landingpage">
                <div>

                    <img
                        /* padding for scroll effect */
                        style={{ paddingTop: '10vh' }}
                        ref={servicesRef}
                        className="photo col-12"
                        alt="closeup"
                        src={closeup} />

                </div>

                <div className="landing-text-1 col-12">
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

                <div className="landing-image photo-large">
                    <img className="photo col-7" alt="toothbrush" src={toothbrush} />
                </div>

                <div className="landing-text-2 col-L-12">
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

                <div className="landing-image photo-small">
                    <img
                        className="photo col-7"
                        alt="toothbrush"
                        src={toothbrush} />
                </div>

            </div>

            <div className="landingpage">
                <div>
                    <div className="landing-image">
                        <img
                            className="photo col-12"
                            alt="dentist"
                            src={dentist} />
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
        </div>
    )
}

export default Services;