const About = ({ aboutRef }) => {
    return (
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
    )
}

export default About;