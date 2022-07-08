import img1 from "../app/assets/img/crunchTime.PNG"
import img2 from "../app/assets/img/MetabolicAbSmash.PNG"
import img3 from "../app/assets/img/cardioBurn.PNG"
import img4 from "../app/assets/img/classicCardio.PNG"

const NoEquipmentsPage = () => {
    return (
<div class="container">
        <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Crunch Time</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Abs</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h3>
                            <p class="d-none d-sm-block">It’s crunch time. Roll out your mat and let’s put your abs to work.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Metabolic Ab Smash</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Abs</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>none</span></h4>
                            <p class="d-none d-sm-block">Take this fun cardio & sculpting workout that targets all of the muscles around your core. With intervals of cardio exercises and focused core work, you will move the core through all the planes of motion and burn fat around your waistline.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Cardio Burn</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h3>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h3>
                            <h3>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h3>
                            <p class="d-none d-sm-block">This bodyweight cardio workout will keep your heart rate of up and burning calories.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Classic Cardio</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>none</span></h4>
                            <p class="d-none d-sm-block">TA quick full-body cardio workout designed to help you burn maximum calories. Full of variety and spontaneity to keep you on your toes.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NoEquipmentsPage;