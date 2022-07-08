import {
    Container,
    Row,
    Col,
    CardImg,
    Card,
    CardBody,
    CardTitle,
    CardText,
  } from "reactstrap";
  import img1 from "../app/assets/img/burCalories.PNG";
  import img2 from "../app/assets/img/healthHeart.PNG";
  import img3 from "../app/assets/img/fitnessRoutine.PNG";
  import img4 from "../app/assets/img/stopSkipping.PNG";

  const FitnessPage = () => {
    return (
      <Container>
        <Row className="row-content align-items-center mb-5">
          <Col>
            <h4 style={{ textAlign: "center" }}>
              Moving More For Heart Health: All Movement is Beneficial!
            </h4>
            <p style={{ textAlign: "center" }}>
              A study, published in January 2021 in the journal PLOS Medicine,
              concluded that people who have the most physically active lifestyles
              have the healthiest hearts.
            </p>
          </Col>
          {/* <div className="media-body align-self-center d-none d-lg-block"> */}

          {/* </div> */}
        </Row>

        <Row className="row-content align-items-center mb-5">
          <Col className="media">
            <img
              id="fitnessImg"
              className="d-flex mr-3 img-thumbnail"
              src={img1}
              alt="Breadcrumb Trail thumbnail"
            />
          </Col>
          <Col className="col-sm-6 order-sm-last col-md-6">
            <h2 className="text-sm-right">
              Use the power of walking to elevate your mood and fitness routine
            </h2>

            <div class="media-body align-self-center d-none d-lg-block">
              <h3>4 ways to to Burn More Calories While Walking</h3>
              <li>Add An Incline.</li>
              <li>Make it Brisk</li>
              <li>Sneak in a Little Strength</li>
              <li>Download the HygieiaFitness App</li>
            </div>
          </Col>
        </Row>
        <Row className="row-content align-items-center mb-5">
          <Col className="col-sm-4 col-md-3">
            <h2 className="text-sm-right">
              The Best Type of Exercise For Heart Health According to Science
            </h2>
          </Col>
          <Col className="media">
            <img
              id="fitnessImg"
              className="d-flex mr-3 img-thumbnail"
              src={img2}
              alt="Breadcrumb Trail thumbnail"
            />
          </Col>
        </Row>

        <Row className="row-content align-items-center mb-5">
          {/*<Col className="col-md-4">
          <Card style={{alignItems: 'center'}}>
            <CardImg width="100%" src={img3} alt="fitness" />
            <CardBody>
              <CardTitle tag="h5">
                  Hint: it's easier than you think
              </CardTitle>
              <CardText>
                <ul>
                  <li>Start Small & Work Your Way Up</li>
                  <li>Set Goals & Reward Yourself</li>
                  <li>Choose Workouts You Enjoy</li>
                  <li>Drop the Perfection Mindset </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
          </Col>
          <Col>
              <h2 className="text-sm-right">
              How to Commit to a Fitness Routine That's Doable
            </h2>
          </Col> */}


          <Col className="col-sm-4 order-sm-last col-md-3">
            <h2 className="text-sm-right">
              How to Commit to a Fitness Routine That's Doable
            </h2>
          </Col>
          <Col className="media">
            <img
              id="fitnessImg"
              className="d-flex mr-3 img-thumbnail"
              src={img3}
              alt="Breadcrumb Trail thumbnail"
            />
            <Col class="d-none d-lg-block">
              <div class="media-body align-self-center d-none d-lg-block">
                <h3>Hint: it's easier than you think</h3>
                  <li>Start Small & Work Your Way Up</li>
                  <li>Set Goals & Reward Yourself</li>
                  <li>Choose Workouts You Enjoy</li>
                  <li>Drop the Perfection Mindset </li>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className="row row-content align-items-center mb-5">
          <Col className="col-sm-4 col-md-3">
            <h2 className="text-sm-right">
              4 Hacks That Will Stop You From Skipping A Workout
            </h2>
          </Col>
          <Col className="media">
            <div class="media-body align-self-center d-none d-lg-block">
              <h4>
                Because exercise should be one of the most exciting parts of your
                day.
              </h4>
              <Col className="d-none d-lg-block">
                <li> Set Small Fitness Goals</li>
                <li>Write Out Your Workout Schedule to Meet Your Goals</li>
                <li>Set Out Your Workout Clothes The Night Before</li>
                <li>Put on Your Workout Clothes to Get in The Right Headspace</li>
              </Col>
            </div>
            <img
              id="fitnessImg"
              className="d-flex mr-3 img-thumbnail"
              src={img4}
              alt="Breadcrumb Trail thumbnail"
            />
          </Col>
        </Row>
      </Container>
    );
  };

  export default FitnessPage;
