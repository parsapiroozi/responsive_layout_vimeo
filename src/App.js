
import React, { Component } from 'react';
import ContentCard from './contentCard';
import Carousel from 'react-bootstrap/Carousel'
import './ContentCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  makeVimeoAPICall() {
    let Vimeo = require('vimeo').Vimeo;
    let client = new Vimeo("ea3f3e1afb470f36e200db02c87238db8d057d6c", "ervORJHg+i+DspfPd79lBZvhJPONofInFpJCQX8SXkfLOFd/buPLyyrkL52uRfdhn7mRlfBEVRNEl54nlY7gJUCWxKr/o9nSSAVP/EYWcGc3UfKTG156JLHUkup3wPqX", "e731625001a6d79f0a4b599cafef49d1");

    client.request({
      method: 'GET',
      path: '/videos/366940631/pictures'
    }, function (error, body, status_code, headers) {
      if (error) {
        console.log(error);
      }
      console.log(body);
      // url1 = body.data[0].sizes[3].link;

    });

  }


  render() {
    var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt impsum augue. In faucibus vehicular magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus.";

    this.makeVimeoAPICall();

    return (
      <div className="App">
        <div className="layout-container">
          <ContentCard id="0" cardHeader="MONSOON III" cardText={description} imageMedia="https://i.vimeocdn.com/video/595198868_505x160.jpg" />
          <ContentCard id="1" cardHeader="BEAMS" cardText={description} imageMedia="https://i.vimeocdn.com/video/589972810_530x315.jpg" />
          <ContentCard id="2" cardHeader="Move 2" cardText={description} imageMedia="https://i.vimeocdn.com/video/590587169_530x315.jpg" />

          <Carousel>

            <Carousel.Item>
              <img
                className="d-block w-100" id="c-picture"
                src="https://i.vimeocdn.com/video/820713918_640x360.jpg?r=pad"
                alt="Third slide"
              />
              <Carousel.Caption>
                <button className="btn btn-dark" style={{marginRight: "1vw"}}>
                  <span class="glyphicon glyphicon-euro" aria-hidden="true">Buy Now</span>
                </button>
                <button className="btn btn-primary">Watch Trailer</button>
                <br />
                <br />
                <h3>make time.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100" id="c-picture"
                src="https://i.vimeocdn.com/video/745160367_640x360.jpg?r=pad"
                alt="Third slide"
              />
              <Carousel.Caption>
                <button className="btn btn-dark" style={{marginRight: "1vw"}}>
                  <span class="glyphicon glyphicon-euro" aria-hidden="true">Buy Now</span>
                </button>
                <button className="btn btn-primary">Watch Trailer</button>
                <br />
                <br />
                <h3>Push forward.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100" id="c-picture"
                src="https://i.vimeocdn.com/video/751531321_640x360.jpg?r=pad"
                alt="Third slide"
              />
              <Carousel.Caption>
                <button className="btn btn-dark" style={{marginRight: "1vw"}}>
                  <span class="glyphicon glyphicon-euro" aria-hidden="true">Buy Now</span>
                </button>
                <button className="btn btn-primary">Watch Trailer</button>
                <br />
                <br />
                <h3>Roamers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
          
        </div>
      </div>
    );

  }

}


export default App;
