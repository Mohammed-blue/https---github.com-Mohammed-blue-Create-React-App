import img1 from "../app/assets/img/beginnerTotalBodyPilates.PNG"
import img2 from "../app/assets/img/beautifulBootyThighs.PNG"
import img3 from "../app/assets/img/ArmsThighs.PNG"
import img4 from "../app/assets/img/ultimatePilatesBody.PNG"

const PilatesPage = () => {
    return (
        <div class="container">
        <div class="row row-content align-items-center">
            <div class="col-sm-4 order-sm-last col-md-3">
                <h2 class="text-sm-right">Beginner Total Body Pilates</h2>
            </div>
            <div class="col">
                <div class="media">
                    <img class="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                    <div class="media-body align-self-center">
                        <h3>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h3>
                        <h3>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h3>
                        <p class="d-none d-sm-block">This is a total body workout suitable for beginners that will tone and sculpt your muscles while giving you a lean and lovely look.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-content align-items-center">
            <div class="col-sm-4 col-md-3">
                <h2 class="text-sm-right">Beautiful Booty & Thighs</h2>
            </div>
            <div class="col">
                <div class="media">
                    <div class="media-body align-self-center">
                        <h4>Target Areas: <span style={{color: 'lightgrey'}}>Legs</span></h4>
                        <h4>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h4>
                        <p class="d-none d-sm-block">Challenge your balance in this thigh sculpting and booty toning workout.</p>
                    </div>
                    <img class="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                </div>
            </div>
        </div>
        <div class="row row-content align-items-center">
            <div class="col-sm-4 order-sm-last col-md-3">
                <h2 class="text-sm-right">Arms & Thighs</h2>
            </div>
            <div class="col">
                <div class="media">
                    <img class="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail" />
                    <div class="media-body align-self-center">
                        <h3>Target Areas: <span style={{color: 'lightgrey'}}>Arms, Legs</span></h3>
                        <h3>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h3>
                        <p class="d-none d-sm-block">Let's chisel your arms, lengthen your back, and tone your inner and outer thighs with this highly effective and fun Pilates workout.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row-content align-items-center">
            <div class="col-sm-4 col-md-3">
                <h2 class="text-sm-right">Ultimate Pilates Body</h2>
            </div>
            <div class="col">
                <div class="media">
                    <div class="media-body align-self-center">
                        <h4>Target Areas: <span style={{color: 'lightgrey'}}>Abs, Legs</span></h4>
                        <h4>Equipment: <span style={{color: 'lightgrey'}}>mat</span></h4>
                        <p class="d-none d-sm-block">Let's chisel your abs, lengthen your legs, and tone your booty with this highly effective and fun Pilates workout.</p>
                    </div>
                    <img class="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                </div>
            </div>
        </div>
    </div>
    )
};

export default PilatesPage;