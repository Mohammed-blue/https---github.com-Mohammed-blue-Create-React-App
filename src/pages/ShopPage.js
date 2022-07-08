import ShopsList from "../features/shops/ShopsList";
import { Container } from 'reactstrap';

const ShopPage = () => {
    return (
        <Container style={{background: 'linear-gradient(270deg,#e03694 -24.77%,#f47253 95.41%)'}}>
            <ShopsList />
        </Container>
    );
};

export default ShopPage;
