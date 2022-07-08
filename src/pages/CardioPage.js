import img1 from "../app/assets/img/lowImpactCardioBlast.PNG"
import img2 from "../app/assets/img/fullBodyBootcamp.PNG"
import img3 from "../app/assets/img/signatureCardioKickboxing.PNG"
import img4 from "../app/assets/img/fatBurnCardio.PNG"

const CardioPage = () => {
    return (
        <div class="container">
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Low Impact Cardio Blast</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img1}alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>none</span></h3>
                            <p class="d-none d-sm-block">Get some cardio in without overworking your joints. This low impact cardio workout will elevate your heart rate and help you burn calories while still protecting your joints.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Full Body Bootcamp</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells</span></h4>
                            <p class="d-none d-sm-block">A dynamic total body workout using dumbbells to sculpt your body and boost your cardio.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Signature Cardio Kickboxing</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>none</span></h3>
                            <p class="d-none d-sm-block">This signature cardio kickboxing workout consisting of jabs, hooks, uppercuts and kicks designed to get you on your way to a leaner body and a healthier mindset.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Fat Burn Cardio</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>none</span></h4>
                            <p class="d-none d-sm-block">This intense tabata cardio workout uses only your bodyweight to burn some serious calories and fat.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardioPage;