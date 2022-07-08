import img1 from "../app/assets/img/getYourBackBack.PNG"
import img2 from "../app/assets/img/lowerBackRelief.PNG"
import img3 from "../app/assets/img/toningYogaSculpt.PNG"
import img4 from "../app/assets/img/getYourBackBack.PNG"


const YogaPage = () => {
    return (
        <div className="container">
            <div className="row row-content align-items-center  mb-5">
                <div className="col-sm-4 order-sm-last col-md-3">
                    <h2 className="text-sm-right">Get Your Back Back</h2>
                </div>
                <div className="col">
                    <div className="media">
                        <img className="d-flex mr-3 img-thumbnail" src={img1} alt="Breadcrumb Trail thumbnail" />
                        <div className="media-body align-self-center">
                            <h3>Target Areas: <span  style={{color: 'lightgrey'}}>Back</span></h3>
                            <h3>Equipment: <span  style={{color: 'lightgrey'}}>mat, yoga strap (optional)</span></h3>
                            <p className="d-none d-sm-block">Do you spend a lot of time sitting? Low back get tweaky sometimes? This class will keep your back healthy to help you stay active.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-content align-items-center mb-5">
                <div className="col-sm-4 col-md-3">
                    <h2 className="text-sm-right">Lower Back Relief</h2>
                </div>
                <div className="col">
                    <div className="media">
                        <div className="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span  style={{color: 'lightgrey'}}>mat</span></h4>
                            <p className="d-none d-sm-block">Alleviate lower back pain tension with this yoga flow that incorporates stretches for your hamstrings, hip flexors, and lower back.</p>
                        </div>
                        <img className="d-flex mr-3 img-thumbnail" src={img2} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
            <div className="row row-content align-items-center mb-5">
                <div className="col-sm-4 order-sm-last col-md-3 ">
                    <h2 className="text-sm-right">Toning Yoga Sculpt</h2>
                </div>
                <div className="col">
                    <div className="media">
                        <img className="d-flex mr-3 img-thumbnail" src={img3} alt="Breadcrumb Trail thumbnail" />
                        <div className="media-body align-self-center">
                            <h3>Target Areas: <span  style={{color: 'lightgrey'}}>Total Body</span></h3>
                            <h3>Equipment: <span  style={{color: 'lightgrey'}}>mat, dumbbells</span></h3>
                            <p className="d-none d-sm-block">Build more strength throughout your body with this Yoga sculpt. Work your midline, glutes, and flows in a deeper and more advanced way.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-content align-items-center mb-5">
                <div className="col-sm-4 col-md-3">
                    <h2 className="text-sm-right">Be Well Balanced</h2>
                </div>
                <div className="col">
                    <div className="media">
                        <div className="media-body align-self-center">
                            <h4>Target Areas: <span style={{color: 'lightgrey'}}>Total Body</span></h4>
                            <h4>Equipment: <span  style={{color: 'lightgrey'}}>mat, blocks (optional)</span></h4>
                            <p className="d-none d-sm-block">Sweat and strengthen your body as you explore some classic standing balance poses.</p>
                        </div>
                        <img className="d-flex mr-3 img-thumbnail" src={img4} alt="Breadcrumb Trail thumbnail" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YogaPage;