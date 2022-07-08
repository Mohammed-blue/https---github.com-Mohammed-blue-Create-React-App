import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardSubtitle,
    CardText,
    List,
    Row,
    Col,
    Container
} from 'reactstrap';

const ShopCard = ({ shop }) => {
    const { image, alt } = shop;

    return (
        <Card className='mt-5 mx-auto'>
            <CardImg
                width='100%'
                src={image}
                alt={alt}
                className='card_thumbnail
                card-img-top'
            />
        </Card>
    );
};

export default ShopCard;