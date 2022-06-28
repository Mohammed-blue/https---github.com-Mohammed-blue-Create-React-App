import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { selectAllCarousels } from './carouselsSlice'



const Carousels = () => {
  const carousels = selectAllCarousels();


  return (

        <Carousel fade >
        {carousels.map((carousel) =>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={carousel.src}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{carousel.title}</h3>
              <p>{carousel.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        </Carousel>

  )

  //   return (
  //     <Carousel fade >
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={img1}
  //           alt="First slide"
  //         />
  //         <Carousel.Caption>
  //           <h3>First slide label</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={img2}
  //           alt="Second slide"
  //         />

  //         <Carousel.Caption>
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //       <Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={img3}
  //           alt="Third slide"
  //         />

  //         <Carousel.Caption>
  //           <h3>Third slide label</h3>
  //           <p>
  //             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //           </p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  //   </Carousel>
  // );

};

export default Carousels;