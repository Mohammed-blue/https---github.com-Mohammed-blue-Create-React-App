import NutritionCard from "./NutritionCard";
import selectAllNutritions from "./nutritionsSlice";
import { Row, Col } from 'reactstrap';

const NutritionsList = () => {
    const nutritions = selectAllNutritions();
    console.log('nutritions:', nutritions);

    return (
        <Row className="ms-auto">
            {nutritions.map((nutrition) => {
                return (
                    <Col
                    md='3'
                    className='m-4'
                    key={nutrition.id}
                    >
                        <NutritionCard nutrition={nutrition} />
                    </Col>
                );
            })
            }
        </Row>
    );
};

export default NutritionsList;