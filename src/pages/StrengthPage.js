import img1 from "../app/assets/img/backArmsRemix.PNG";
import img2 from "../app/assets/img/superDumbbellStrength.PNG";
import img3 from "../app/assets/img/blazingGuns.PNG";
import img4 from "../app/assets/img/upperBodyAndBurn.PNG";


const StrengthPage = () => {
    return (
        <div class="container">
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Back & Arm Remix</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Arms</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells</span></h3>
                            <p class="d-none d-sm-block">We are back at it — pun intended. Let's sculpt lines in the upper body to show off your best you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Super Dumbbell Strength</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells</span></h4>
                            <p class="d-none d-sm-block">Upper body. Lower body. Total body! Grab two dumbbells and power through strength training intervals with Gideon. While the pace may be slower, the sweat will still fall.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Blazing Guns</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Arms</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells</span></h3>
                            <p class="d-none d-sm-block">Your guns will be blazing in this completely arm-focused dumbbell workout. Ready, aim, fire.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Upper Body Box & Burn</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Arms</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells (optional)</span></h4>
                            <p class="d-none d-sm-block">Mix up upper body strength exercises with fun and fast paced boxing cardio moves. You’ll switch from strength moves such as lateral raises into powerful boxing combos such as front punches to get your cardio kick. Get fit, strong, have fun and unleash your inner beast with this workout.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StrengthPage;