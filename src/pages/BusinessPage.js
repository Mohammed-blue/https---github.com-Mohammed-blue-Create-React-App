import React from 'react';
import { Row, Col , Button, Container } from 'react-bootstrap';
import img1 from '../app/assets/img/workoutAppPhone.PNG'
import ContactForm from '../components/ContactForm';

const BusinessPage = () => {
    return (
        <>
        <div className=" jumbotron ">
            <div className=" big-banner">
                <div className="row align-items-center">
                    <div className="col text-light">
                            <h1 >World’s best fitness & wellness platform, 10+ Million Strong.</h1>
                            <p >Access the widest variety of digital workouts, led by the world’s greatest trainers and top celebrities–and now, gain access to your favorite gyms and studio classes!There’s something for everyone – find your fitness your way.</p>
                    </div>
                </div>


            </div>
        </div>
        <Container className='pt-5'>
            <Row className='row-content align-items-center mb-5'>
                <Col className='col-sm-4 order-sm-last col-md-3'>
                    <ul className="d-none d-lg-block">
                        <li>Cardio, Mental Health, Nutrition, Sleep, Yoga, Strength + more</li>
                        <li>Intensity from beginner to advanced athletes</li>
                        <li>Online classes from 5 minutes to 60 minutes. Anytime. Anywhere.</li>
                        <li>In-person access to some of the top fitness brands</li>
                    </ul>
                </Col>
                <Col>
                <div className="media">
                    <img id="fitnessImg" className="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                    <div className="media-body align-self-center d-none d-md-block" style={{paddingTop: '15%'}}>
                        <h3>A <span id="hybrid" className="gradient-font-4">hybrid wellness platform</span> made for the hybrid workforce.</h3>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                    main St.<br />
                    Sunrise, FL 75048<br />
                    U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                    role='button'
                    className='btn btn-link'
                    href="tel:+12065551234"
                    >
                        <i className='fa fa-phone'>1-206-555-1234</i>
                    </a>
                    <br />
                    <a
                    role='button'
                    className='btn btn-link'
                    href="mailto:fakeemail@fakeemail.co"
                    >
                        <i className='fa fa-envelope-o'>hygieiafitness@gmail.com</i>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col xs='12'>
                    <h2>Send Us Your Feedback</h2>
                    <hr />
                </Col>
                <Col md='10'>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default BusinessPage;