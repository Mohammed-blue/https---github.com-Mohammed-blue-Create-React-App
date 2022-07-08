import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardSubtitle,
    CardText,
    Row,
    Col,
    Container
} from 'reactstrap';

const NutritionCard = ({ nutrition }) => {
    const { image, title, text, subTitle, subTexts } = nutrition;

    return (
        <Container>
            <Row id="row-wrapper">
                <Col className="lg-4 py-2 mb-5">
                    <Card className="mx-auto">
                        <CardImg
                        width='100%'
                        src={image}
                        alt={title}
                        />
                            <CardImgOverlay>
                                <CardTitle tag='h5' id="card-title">{title}</CardTitle>
                                <CardText id="card-text">
                                    <p>{text}</p>
                                </CardText>
                                <CardSubtitle tag='h6' id='card-subtitle'>{subTitle}</CardSubtitle>
                                <br/>
                                <ul>
                                    {subTexts.map((text) => <li  id="card-text">{text}</li>)}
                                </ul>
                            </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default NutritionCard;