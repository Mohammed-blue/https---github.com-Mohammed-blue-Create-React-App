import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Row,
    Col,
    Container
    } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const HomeExerciseCard = ({ exercise }) => {
    const { name, image } = exercise;
    console.log('id: ', exercise)

    return (
        <NavLink to={`/${name}`}>
            <Container className="container-fluid">
                <Row i>
                    <Col className="lg-4 py-2 mb-5">
                        <Card className="mx-auto">
                            <CardImg
                            width='100%'
                            src={image}
                            alt={name}
                            className="card_thumbnail card-img-top"
                            />
                                <CardImgOverlay className='cardImgOverlay'>
                                    <CardTitle tag='h5' id="cardTitle">{name}</CardTitle>
                                </CardImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </NavLink>
    );
};

export default HomeExerciseCard;