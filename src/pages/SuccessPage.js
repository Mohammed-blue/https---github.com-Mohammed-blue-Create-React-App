import { Container, Row, Col } from 'reactstrap';
import img1 from '../app/assets/img/succes1.PNG';
import img2 from '../app/assets/img/success2.PNG';

const SuccessPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Zain Jamal Broke Through with Mindfulness</h2>

                    <img style={{marginRight: 12}} id="fitnessImg" class="d-flex mr-3 mb-8 img-thumbnail"  src={img1} alt="Breadcrumb Trail thumbnail"/>
                    <p>
                        Weight before: 145 lb (89 lb during anorexia)
                        Weight now: 105 lb
                        Age: 33
                        Height: 5’3″
                        Location: Vancouver, BC, Canada
                        Occupation: Nutritionist/yoga instructor/fitness model
                        Weighing 145 pounds after a period of binge eating that followed years of anorexia (her lowest weight was 89 pounds back in 2005), Zain knew it was time to commit to a lifestyle of consistent, healthy habits rather than bouncing between two extremes. “When I started practicing mindfulness, everything changed,” says Zain.
                        Spending time with herself was the first step. After some reflection, Zain realized that her body image was a wreck and that her eating habits stemmed from a desire to be accepted by others. She joined our HygieiaFitness community and learned yoga and meditation, she decided once and for all not to succumb to her own “mind games.” Zain began to practice deep breathing, boosted her motivation by repeating inspiring mantras, had one of our personal trainer help her out, and became more educated on clean eating.
                        “I faced my fears and worked through them,” says Zain, who lost 40 pounds the healthy way and now teaches within our community to help women recovering from eating disorders. “Mindfulness has taught me to cultivate humility, maintain discipline and choose love rather than fear.”
                    </p>
                </Col>
            </Row>
            <Row  >
                <Col>
                    <h2>Wendy Mills Became Fit by 50</h2>
                    <img style={{marginRight: 12}}  id="fitnessImg" class="d-flex mr-3 mb-8 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    <p >
                        Weight before: 225 lbs
                        Weight now: 124 lbs
                        Age: 50
                        Height: 5′ 5″
                        Location: Aurora, Ontario
                        Occupation: Chartered Accountant
                        Proudest moment: “When I started to see muscle definition!”
                        When she was 46 years old, Wendy Mills set a goal: to be her absolute fittest by her 50th birthday. “I knew I would have to lose about 100 pounds!” she says. “So I started setting smaller goals, like giving up fast food or going for a walk.” Taking it slowly, she lost the first 55 pounds.
                        At 170 pounds, the scale became stuck. She joined our HygieiaFitness and started weigh training. “I was terrified,” she admits. But once she started, Wendy found that her mission changed. No longer focusing on losing weight by the time she turned 50, she transformed her mindset: “My goals became strength-related,” explains Wendy, who now includes home training sessions in her routine. Equipped with weights, a bench, resistance bands and medicine balls, Wendy replicates gym exercises. And when it comes to getting results, home reps count as much as gym reps.
                        Weighing in at 124 pounds, Wendy reached her goal two years early. She turned 50 this year and happily reported that she has maintained her fit lifestyle. “I am now aiming for fit at 60!” she says. “I have not lost my motivation.”
                    </p>
                </Col>
            </Row>
            <div className="row d-none d-md-block">
                <div className="col-lg center-button-block text-center">
                    <a  href="/sign-up" className="btn none" id="sign-up-btn">SIGN UP FOR FREE</a>
                    <h4>Sign up now with our  Ultimate free fitness package</h4>
                </div>
            </div>
        </Container>
    );
};

export default SuccessPage;