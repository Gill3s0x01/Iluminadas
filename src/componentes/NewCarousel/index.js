import './style.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function NewCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 images"
          src="./1carrossel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./2carrossel.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./3carrossel.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
            
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
