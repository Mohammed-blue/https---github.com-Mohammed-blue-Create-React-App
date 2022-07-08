import img1 from "../app/assets/img/quickBooty.PNG"
import img2 from "../app/assets/img/upperBodyIntervalMix.PNG"
import img3 from "../app/assets/img/krazyKettlebells.PNG"
import img4 from "../app/assets/img/hiitHold.PNG"

const HiitPage = () => {
    return (
        <div class="container">
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Quick HIIT Booty</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img class="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Booty</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells (optional)</span></h4>
                            <p class="d-none d-sm-block">This killer glute workout will have your booty burning in no time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">Upper Body Interval Mix</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Booty</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, dumbbells</span></h4>
                            <p class="d-none d-sm-block">This workout is the perfect combination of upper body strength exercises mixed with cardio drills to keep your heart rate high and your body burning calories.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 order-sm-last col-md-3">
                    <h2 class="text-sm-right">Krazy Kettlebells</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <img src={img3} class="d-flex mr-3 img-thumbnail" alt="Bootstrapm Outfitteres" />
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat, kettebells or dumbbells</span></h4>
                            <p class="d-none d-sm-block">This full body kettlebell AMRAP (as many rounds as possible) will hit every muscle group in your body. We will be doing 3 AMRAP rounds that you can complete with dumbbells too if you don't have kettlebells.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row row-content align-items-center">
                <div class="col-sm-4 col-md-3">
                    <h2 class="text-sm-right">HIIT & Hold</h2>
                </div>
                <div class="col">
                    <div class="media">
                        <div class="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h4>
                            <p class="d-none d-sm-block">A hybrid workout that is sure to leave you stronger and more centered than when you started. Grab your yoga mat and get ready for sweat dripping interval training, and isometric yoga holds for total body strength.</p>
                        </div>
                        <img class="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HiitPage;