
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';


class CarouselCard extends Component {

    render() { 

        return (
            <Carousel>
                {
                    this.props.carouselContent.map(carouselContent => (
                        <Carousel.Item key={carouselContent.id} id={carouselContent.id}>
                            <img
                                className='d-block w-100' id='caros-picture'
                                src={carouselContent.mediaPictureSource}
                                alt='Third slide'
                            />
                            <Carousel.Caption>
                                <div className='caros-caption-picture-container'>
                                    <img
                                        id='caros-caption-picture'
                                        src={carouselContent.mediaPictureSource}
                                        alt='carousel content caption not found'
                                    />
                                </div>
                                <button className='btn btn-dark' style={{marginRight: '1vw'}}>Buy Now</button>
                                <button className='btn btn-primary'>Watch Trailer</button>
                                <br />
                                <br />
                                <h3>{carouselContent.captionTitle}</h3>
                                <p>{carouselContent.captionText}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        );

    }

}
 

export default CarouselCard;
