import HomeExerciseCard from './HomeExerciseCard';
import { selectAllCards } from './homeExercisesSlice';
import { Row, Col } from 'reactstrap';

const HomeExercisesList = () => {
    const exercises = selectAllCards();
    console.log('exercises: ', exercises);

    return (
        <div id="backgroundImg">
            <Row className="ms-auto"  >
                {exercises.map((exercise) => {
                    return (
                        <Col
                        md='3'
                        className='m-4'
                        key={exercise.id}
                        >
                            <HomeExerciseCard exercise={exercise} />
                        </Col>
                    );
                })
                }
            </Row>
        </div>
    )
};

export default HomeExercisesList;