import Carousels from '../features/carousels/Carousels';
import HomeExercisesList from '../features/hygieiafitness/HomeExercisesList'


const HomePage = () => {
    return (
        <div className='homePage'>
            <Carousels />
            {/* Sign up button */}
            <div className="row d-none d-md-block signUp">
                <div className="col-lg center-button-block text-center">
                    <a href="/sign-up" className="btn none" id="sign-up-btn">SIGN UP FOR FREE</a>
                    <h4>Sign up now with our  Ultimate free fitness package</h4>
                </div>
            </div>
            <HomeExercisesList />
        </div>
    )
};

export default HomePage;