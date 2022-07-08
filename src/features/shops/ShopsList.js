import ShopCard from "./ShopCard";
import selectAllShops from "./shopSlice";
import { Row, Col  } from "reactstrap";

const ShopsList = () => {
    const shops = selectAllShops();

    return (
        <Row>
            {shops.map((shop) => {
                return (
                <Col
                md='3'
                className='m-4'
                key={shop.id}>
                    <ShopCard shop={shop} />
                </Col>
                );
            })
            }
        </Row>
    );
};

export default ShopsList;