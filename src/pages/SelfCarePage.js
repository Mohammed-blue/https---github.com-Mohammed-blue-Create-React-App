import { Container, Row, Col } from 'reactstrap';
import img1 from '../app/assets/img/meditation.PNG';
import img2 from '../app/assets/img/neckPain.PNG';
import img3 from '../app/assets/img/burnOuts.PNG';
import img4 from '../app/assets/img/selfLove.PNG';

const SelfCarePage = () => {
    return (
        <Container>
            <Row className="row-content align-items-center mb-5">
                <Col className="col-sm-4 order-sm-last col-md-3">
                    <h2 className="text-sm-right">A Meditation For Whatever You’re Feeling Right Now</h2>
                </Col>
                <Col className='media'>
                    <img id="fitnessImg" class="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail"/>
                        <div className="media-body align-self-center d-none d-lg-block">
                            <h3>Feeling anxious, stressed, or tired? Meditation can help.</h3>
                            <p className="d-none d-lg-block">The benefits of meditation are immeasurable, with science and research backing up all it claims to be! Meditation has been shown to reduce stress, reduce feelings of anxiety, and improve sleep.
                            </p>
                        </div>
                </Col>
            </Row>
            <Row className="row-content align-items-center mb-5">
                <Col className="col-sm-4 col-md-3">
                    <h2 className="text-sm-right"> 4 Life-Changing Tips to Combat Neck Pain</h2>
                </Col>
                <Col className='media'>
                    <div className="media-body align-self-center d-none d-lg-block">
                        <h4>How to Prevent Pain From Happening</h4>
                        <ol className="d-none d-lg-block">
                            <li>Postural Awareness & Ergonomics</li>
                            <li>Tech Breaks & Sitting Breaks</li>
                            <li>Change Positions Frequently</li>
                            <li>Massage Therapy</li>
                        </ol>
                    </div>
                    <img id="fitnessImg" className="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail"/>
                </Col>
            </Row>
            <Row className="row-content align-items-center mb-5">
                <Col className="col-sm-4 order-sm-last col-md-3">
                    <h2 className="text-sm-right">A Meditation For Whatever You’re Feeling Right Now</h2>
                </Col>
                <Col className='media'>
                    <img id="fitnessImg" class="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail"/>
                    <div className="media-body align-self-center d-none d-lg-block">
                        <h3>While decreasing the chance of experiencing burnout in the first place.</h3>
                        <ol className="d-none d-lg-block">
                            <li>Go To Bed 30 Minutes Earlier</li>
                            <li>Eat Nutrient-Dense Foods</li>
                            <li>Go For A Walk</li>
                            <li>Say No Today</li>
                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className="row-content align-items-center mb-5">
                <Col className="col-sm-4 col-md-3">
                    <h2 className="text-sm-right">4 Powerful Habits For Self-Love & Total Self-Acceptance</h2>
                </Col>
                <Col className='media'>
                    <div className="media-body align-self-center d-none d-lg-block">
                        <h4>Because the relationship with yourself is the most important one you have.</h4>
                        <ol className="d-none d-lg-block">
                            <li>Treat Yourself</li>
                            <li>Nourish Your Body</li>
                            <li>Get Yourself a Gift</li>
                            <li>Sleep!</li>
                        </ol>
                    </div>
                    <img id="fitnessImg" className="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail"/>
                </Col>
            </Row>
        </Container>
    )
}

export default SelfCarePage;