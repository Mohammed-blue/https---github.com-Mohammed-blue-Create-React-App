import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../App.css';
import { selectAllCarousels } from './carouselsSlice'



const Carousels = () => {
  const carousels = selectAllCarousels();


  return (
        <Carousel fade >
        {carousels.map((carousel) =>
          <Carousel.Item className='carousel' key={carousel.id}>
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
  );
};

export default Carousels;